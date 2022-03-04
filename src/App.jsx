import { theme, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer } from './components';
import { Home, About, RoadMap, Gallery, Team, FAQ } from './pages';
import { fetchData } from './redux/data/dataActions';
import { connect } from './redux/blockchain/blockchainActions';
import BG from './assets/bg.jpg';

const { VITE_APP_CONTRACT_ADDRESS } = import.meta.env;

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    // heading: 'Pixel-Western Regular',
    // body: 'Pixel-Western Regular',
  },
  colors: {
    ...theme.colors,
    bg: '#f5f5f1',
    bgLight: '#efeee8',
    bgDark: '#e8e7df',
    lightBlack: '#181817',
    lightOrange: '#feb64d',
  },
});

function App() {
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnect = () => {
    dispatch(connect());
    getData();
  };

  useEffect(() => {
    if (!blockchain.account && !blockchain.smartContract) {
      handleConnect();
    } else {
      getData();
    }
  }, [blockchain.account]);

  useEffect(() => {
    if (blockchain.errorMsg) {
      toast.error(blockchain.errorMsg);
    }
    if (data.errorMsg) {
      toast.error(data.errorMsg);
    }
  }, [blockchain.errorMsg, data.errorMsg]);

  const claimNFTs = (count) => {
    if (count <= 0) {
      return;
    }

    toast.info('Preparing your NFT...');
    const value = blockchain.web3.utils.toWei((data.cost * count).toString(), 'ether');
    blockchain.smartContract.methods
      .mint(count)
      .send({
        gasLimit: '4712388',
        to: REACT_APP_CONTRACT_ADDRESS,
        from: blockchain.account,
        value,
      })
      .once('error', (err) => {
        console.log(err);
        toast.error('It seems the transaction was cancelled.');
      })
      .then((receipt) => {
        toast.success('Woohoo! NFT minted successfully!');
        dispatch(fetchData(blockchain.account));
      });
  };
  return (
    <ChakraProvider theme={extendedTheme}>
      <Box
        minH="100vh"
        backgroundImage={BG}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Header onConnect={handleConnect} address={blockchain.account} />
        <Box>
          <Home
          // onConnect={handleConnect}
          // address={blockchain.account}
          // data={data}
          // onMint={claimNFTs}
          // loading={blockchain.loading}
          />
          <About />
          <RoadMap />
          <Gallery />
          <Team />
          <FAQ />
        </Box>
        <Footer />
      </Box>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
