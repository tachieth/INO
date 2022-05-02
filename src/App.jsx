import {useCallback, useEffect} from 'react';
import { theme, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers, Contract } from 'ethers';
import WalletLink from 'walletlink';
import Web3Modal from 'web3modal';

import {Header, Footer } from './components';
import { Home, About, RoadMap, Mission, Project, Team, Demo } from './pages';
import {
  connectRequest,
  connectSuccess,
  connectFailed,
  updateAccountRequest,
  resetRequest,
} from './redux/blockchain/blockchainActions';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailed } from './redux/data/dataActions';
import ContractAbi from './contracts/ABI.json';

const { VITE_APP_CONTRACT_ADDRESS, VITE_INFURA_ID, VITE_APP_NETWORK_ID, VITE_APP_NETWORK } =
  import.meta.env;

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    // heading: 'Pixel-Western Regular',
    // body: 'Pixel-Western Regular',
  },
  colors: {
    ...theme.colors,
    bgLight: '#efeee8',
    blue: '#00aeee',
    red: '#d54d9e',
    green: '#018b44',
    purple: '#8d51a2',
    darkGreen: '#EFFAFF',
    text: '#EFFAFF',
  },
});

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: VITE_INFURA_ID, // required
    },
  },
  // 'custom-walletlink': {
  //   display: {
  //     logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
  //     name: 'Coinbase',
  //     description: 'Connect to Coinbase Wallet (not Coinbase App)',
  //   },
  //   options: {
  //     appName: 'Coinbase', // Your app name
  //     networkUrl: `https://mainnet.infura.io/v3/${VITE_INFURA_ID}`,
  //     chainId: 1,
  //   },
  //   package: WalletLink,
  //   connector: async (_, options) => {
  //     const { appName, networkUrl, chainId } = options;
  //     const walletLink = new WalletLink({
  //       appName,
  //     });
  //     const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
  //     await provider.enable();
  //     return provider;
  //   },
  // },
};

const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true,
  providerOptions, // required
});

function App() {
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
    };
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

  return (
    <ChakraProvider theme={extendedTheme}>
      <Box
        minH="100vh"
        // bg="#6f9fcd"
        bgGradient="linear(to-r,#000046,#1CB5E0)"
      >
        {/* <Header onConnect={connect} address={address} /> */}
        <Box>
          <Home
            onConnect={connect}
            address={address}
            data={data}
            // onMint={claimNFTs}
            loading={blockchainLoading || data.loading}
          />
          <About />
          <Mission />
          <Project />
          <Demo />
          <RoadMap />
          {/* <Gallery /> */}
          <Team />
          {/* <FAQ /> */}
        </Box>
        <Footer />
      </Box>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
