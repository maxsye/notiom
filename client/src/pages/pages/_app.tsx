import { ChakraProvider } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

function MyApp() {
  return (
    <ChakraProvider>
      <h1>Hello</h1>
      <NavBar />
    </ChakraProvider>
  );
}

export default MyApp;
