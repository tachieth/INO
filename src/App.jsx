import { theme, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer } from './components';
import { Home, About, RoadMap, Gallery, Team, FAQ } from './pages';
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
  return (
    <ChakraProvider theme={extendedTheme}>
      <Box
        minH="100vh"
        backgroundImage={BG}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Header
          // onConnect={handleConnect} address={blockchain.account} 
          
          />
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
