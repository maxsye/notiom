import { Heading, Button, Spacer, Image, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next/types';
import { useState } from 'react';

const DocumentPage: NextPage = () => {
  const [score, setScore] = useState(0);

  const increment = () => {
    setScore(score + 1);
  };

  return <></>;
};
