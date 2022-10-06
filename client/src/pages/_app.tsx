import { ChakraProvider } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Test from '../components/Test';

function MyApp() {
  return (
    <ChakraProvider>
      <div>
        <h1>Test</h1>
        <h2>Test</h2>
        <NavBar />
        <Test />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
