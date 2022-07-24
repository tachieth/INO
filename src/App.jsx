import { theme, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/space-grotesk';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Header } from './components';
import { Home, E1, EvaMap, Mainifesto, Mint, Gallery, Career } from './pages';
import { rarityStore } from './helpers/rarity';

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
  const traits = rarityStore.getTraits();
  const count = rarityStore.getCount();
  const meta = rarityStore.getMeta();
  return (
    <ChakraProvider theme={extendedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/e1" element={<E1 />} />
            {/* <Route path="/evamap" element={<EvaMap />} /> */}
            <Route path="/manifesto" element={<Mainifesto />} />
            {/* <Route path="/mint" element={<Mint />} /> */}
            <Route
              path="/gallery"
              element={<Gallery traits={traits} count={count} meta={meta} />}
            />
            <Route path="/career" element={<Career />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </ChakraProvider>
  );
}

const Layout = () => {
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
