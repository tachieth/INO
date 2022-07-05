import { theme, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/space-grotesk';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Header } from './components';
import { Home, E1, EvaMap, Mainifesto, Mint, Gallery, Career } from './pages';

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    heading: 'Space Grotesk',
    body: 'Space Grotesk',
  },
  colors: {
    ...theme.colors,
    text: '#EFFAFF',
    primary: '#096069',
  },
});

function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/e1" element={<E1 />} />
            <Route path="/evamap" element={<EvaMap />} />
            <Route path="/manifesto" element={<Mainifesto />} />
            {/* <Route path="/mint" element={<Mint />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </ChakraProvider>
  );
}

const Layout = ({ connect, address }) => {
  return (
    <Box minH="100vh" bg="#FEFAEF">
      <Box>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
