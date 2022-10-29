import { Heading, Text, VStack } from '@chakra-ui/react';

const LandingInfo = () => {
  return (
    <VStack spacing={10} pt={100} pb={90}>
      <Heading color="#545454" size="2xl">
        Create. Explore.
      </Heading>
      <Text color="#545454" fontSize="3xl">
        The document editing software you&apos;ve been waiting for.
      </Text>
    </VStack>
  );
};

export default LandingInfo;
