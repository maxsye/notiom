import { Box, Image, Heading, Text, HStack, Spacer, Button } from "@chakra-ui/react";

const CreatePrompt = () => {
  return (
    <Box px={12} py={10}>
      <HStack align="center" spacing={4} justifyContent="center" display="flex" flexDirection="column">
        <Heading color="#545454" fontSize="5xl">
          Create. Explore.
        </Heading>
        <Heading color="#545454" fontSize="3xl" padding="5%">
          The document editing software you've been waiting for
        </Heading>
      </HStack>
    </Box>
  );
};

export default CreatePrompt;