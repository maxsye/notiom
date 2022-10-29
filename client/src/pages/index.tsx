import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import Documents from '../components/documents';
import NavBar from '../components/nav-bar';
import LandingInfo from '../components/landing-info';

const Home: NextPage = () => {
  return (
    <>
      <Box bg="#FBFBFA">
        <NavBar />
        <LandingInfo />
      </Box>
      <Documents />
    </>
  );
};

export default Home;
