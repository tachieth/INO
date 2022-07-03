import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { providers, Contract, utils as etherUtils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import Web3Modal from 'web3modal';
import axios from 'axios';

import {
  connectRequest,
  connectSuccess,
  connectFailed,
  updateAccountRequest,
  resetRequest,
} from '../redux/blockchain/blockchainActions';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailed } from '../redux/data/dataActions';
import ContractAbi from '../contracts/ABI.json';

const {
  VITE_APP_CONTRACT_ADDRESS,
  VITE_INFURA_ID,
  VITE_APP_NETWORK_ID,
  VITE_APP_NETWORK,
  VITE_WHITELIST_API,
  VITE_MERKEL_TREE_API,
} = import.meta.env;

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true,
  providerOptions, // required
});

const mintState = {
    0: "PAUSED",
    1: "INOLIST",
    2: "FINAL"
  }

export default function Mint() {
  const [count, setCount] = React.useState(1);
  const [whitelist, setwhitelist] = useState([]);
  const [fetching, setFetching] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getWhitelistedUsers = async () => {
    try {
      setFetching(true);
      const response = await axios.get(VITE_WHITELIST_API);
      const data = response.data.data;
      console.log(data);
      setwhitelist(data);
      setFetching(false);
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    getWhitelistedUsers();
  }, []);

  const connect = useCallback(async () => {
    try {
      dispatch(connectRequest());
      const provider = await web3Modal.connect();
      const web3 = new providers.Web3Provider(provider);
      const signer = web3.getSigner();
      const address = await signer.getAddress();
      const network = await web3.getNetwork();
      const smartContract = new Contract(VITE_APP_CONTRACT_ADDRESS, ContractAbi, signer);
      dispatch(
        connectSuccess({ provider, web3, address, chainId: network.chainId, smartContract })
      );
    } catch (err) {
      console.log(err.message);
      dispatch(connectFailed(err.message));
    }
  }, []);

  const {
    provider,
    web3,
    address,
    chainId,
    smartContract,
    loading: blockchainLoading,
    error: blockchainError,
  } = blockchain;

  useEffect(() => {
    if (smartContract) {
      getData();
    }
  }, [smartContract]);

  const getData = async () => {
    try {
      if (!!smartContract) {
        dispatch(fetchDataRequest());
        let totalSupply = (await smartContract.totalSupply()).toNumber();
        // let cost = await smartContract.PRICE_INO();
        const SaleConfig = await smartContract.saleConfig();
        console.log(SaleConfig, typeof SaleConfig);
        let presaleActive = SaleConfig === 1;
        // let saleActive = SaleConfig === 1;
        let finalSaleActive = SaleConfig === 2;
        // let maxMintAmount = (await smartContract.maxMintAmountPerTx()).toNumber();
        let ownerAddr = await smartContract.owner();
        // const price = etherUtils.formatEther(cost);
        dispatch(
          fetchDataSuccess({
            totalSupply,
            cost: 0,
            owner: ownerAddr,
            presaleActive,
            // saleActive,
            finalSaleActive,
            saleConfig: SaleConfig
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchDataFailed(error.message));
    }
  };

  useEffect(() => {
    if (blockchainError) {
      toast.error(blockchainError);
    }
    if (data.error) {
      toast.error(data.error);
    }
  }, [blockchainError, data.error]);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect();
      }
      dispatch(resetRequest());
    },
    [provider]
  );

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts);
        updateAccountRequest({
          address: accounts[0],
        });
        window.location.reload();
      };

      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error);
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  useEffect(() => {
    if (chainId && Number(chainId) !== Number(VITE_APP_NETWORK_ID)) {
      toast.error(`Change the network to ${VITE_APP_NETWORK}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  }, [chainId]);

  const claimNFTs = async () => {
    if (count <= 0) {
      return;
    }

    try {
      toast.info('Preparing your NFT...');
      const value = etherUtils.parseEther((Number(data.cost) * Number(count)).toString());
      const estimate = await smartContract.estimateGas.initialPublicMint(count, {
        value,
        from: address,
      });
      const trx = await smartContract.initialPublicMint(count, {
        value,
        from: address,
        gasLimit: estimate,
      });
      const receipt = await trx.wait();
      console.log(receipt);
      toast.success('Woohoo! NFT minted successfully!');
      getData();
    } catch (err) {
      const error =
        Object.keys(err).includes('message') && !Object.keys(err).includes('error')
          ? err
          : err.error;
      console.log(error)
      if (error.message.includes('insufficient funds')) {
        toast.error('Insufficient Funds');
      } else if (error.message.includes('Not a valid leaf in the Merkle tree')) {
        toast.error('Not a whitelist user');
      } else {
        const formatedError = error.message.split('{')[0];
        if (formatedError.includes('execution reverted:')) {
          toast.error(formatedError.split('execution reverted:')[1]);
        } else {
          toast.error(formatedError);
        }
      }
    }
  };

  const finalClaimNFTs = async () => {
    if (count <= 0) {
      return;
    }

    try {
      toast.info('Preparing your NFT...');
      const value = etherUtils.parseEther((Number(data.cost) * Number(count)).toString());
      const estimate = await smartContract.estimateGas.finalMint(count, {
        value,
        from: address,
      });
      const trx = await smartContract.finalMint(count, {
        value,
        from: address,
        gasLimit: estimate,
      });
      const receipt = await trx.wait();
      console.log(receipt);
      toast.success('Woohoo! NFT minted successfully!');
      getData();
    } catch (err) {
      const error =
        Object.keys(err).includes('message') && !Object.keys(err).includes('error')
          ? err
          : err.error;
      if (error.message.includes('insufficient funds')) {
        toast.error('Insufficient Funds');
      } else if (error.message.includes('Not a valid leaf in the Merkle tree')) {
        toast.error('Not a whitelist user');
      } else {
        const formatedError = error.message.split('{')[0];
        if (formatedError.includes('execution reverted:')) {
          toast.error(formatedError.split('execution reverted:')[1]);
        } else {
          toast.error(formatedError);
        }
      }
    }
  };

  const whitelistNFTs = async () => {
    if (count <= 0) {
      return;
    }

    if (whitelist.length === 0) {
      toast.error('Something went wrong!');
      return;
    }

    if (!smartContract) {
      toast.error('Something went wrong!');
      return;
    }

    try {
      toast.info('Preparing your NFT...');
      const value = etherUtils.parseEther((Number(data.cost) * Number(count)).toString());
      const res = await axios.post(
        `${VITE_MERKEL_TREE_API}/hash`,
        {
          data: { whitelist: JSON.stringify(whitelist), address },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { hash, proof } = res.data;
      const estimate = await smartContract.estimateGas.inoListMint(count, proof, {
        value,
        from: address,
      });
      const trx = await smartContract.inoListMint(count, proof, {
        value,
        from: address,
        gasLimit: estimate,
      });
      const receipt = await trx.wait();
      console.log(receipt);
      toast.success('Woohoo! NFT minted successfully!');
      getData();
    } catch (err) {
      const error =
        Object.keys(err).includes('message') && !Object.keys(err).includes('error')
          ? err
          : err.error;
      if (error.message.includes('insufficient funds')) {
        toast.error('Insufficient Funds');
      } else if (error.message.includes('Not a valid leaf in the Merkle tree')) {
        toast.error('Free Mint is only for M1 Holders, Hang tight till Public Sale');
      } else if (error.message.includes('Invalid params')) {
        toast.error('Invalid Data!');
      } else {
        const formatedError = error.message.split('{')[0];
        if (formatedError.includes('execution reverted:')) {
          toast.error(formatedError.split('execution reverted:')[1]);
        } else {
          toast.error(formatedError);
        }
      }
    }
  };

  return (
    <Box maxW="1200px" mx="auto" w="100%" pb="50px" px={{ base: '20px', md: '0' }}>
      <Heading color="primary" fontSize={{ base: '35px', md: '76px', lg: '6xl' }}>
        MINT YOUR INO{' '}
        <Box display="inline-block" opacity="0.8">
          (PHASE {mintState[data.saleConfig]})
        </Box>
      </Heading>
      <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
      <Flex flexDirection="column" alignItems="center">
        <Text color="primary" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
          <Box display="inline-block" opacity="0.8">
            {!address ? 'X' : data.maxSupply - data.totalSupply}
          </Box>
          /7,999 REMAINING
        </Text>
        <Image src="/images/mint_banner.png" maxW={{ base: '100%', md: '500px' }} my="30px" />
        <Text color="primary" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
          HOW MANY INO DO YOU WANT TO MINT?
        </Text>
        <Flex my="20px">
          <Flex
            as="button"
            opacity={Number(count) === 1 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(1)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              1
            </Text>
          </Flex>
          {/* <Flex
            as="button"
            opacity={Number(count) === 2 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(2)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              2
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 3 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(3)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              3
            </Text>
          </Flex> */}
          {/* <Flex
            as="button"
            opacity={Number(count) === 4 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(4)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              4
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 5 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_5.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(5)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              5
            </Text>
          </Flex> */}
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          className="detail-box"
          w="250px"
          h={{ base: '60px', md: '70px' }}
          borderRadius="15px"
          as="button"
          mt="20px"
          disabled={
            blockchainLoading ||
            data.loading ||
            fetching ||
            (address && !data.presaleActive && !data.finalSaleActive)
          }
          opacity={
            blockchainLoading ||
            data.loading ||
            fetching ||
            (address && !data.presaleActive && !data.finalSaleActive)
              ? 0.5
              : 1
          }
          onClick={() => {
            if (!address) connect();
            if (address && data.finalSaleActive) finalClaimNFTs();
            // if (address && data.saleActive) claimNFTs();
            if (address && data.presaleActive) whitelistNFTs();
          }}
        >
          <Text color="white" fontSize={{ base: '18px', md: '24px' }} fontWeight="bold">
            {!address
              ? 'Connect Wallet'
              : blockchainLoading || data.loading || fetching
              ? 'Please wait...'
              : !data.presaleActive &&
                !data.finalSaleActive
              ? 'Sale Not Active'
              : 'MINT'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
