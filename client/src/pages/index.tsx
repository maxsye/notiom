import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import CreatePrompt from '../components/CreatePrompt';
import Documents from '../components/documents';

const Home: NextPage = () => {
  return (    
  <>
    <NavBar />
    <CreatePrompt/>
    <Documents/>
  </>
  );
};

export default Home;
