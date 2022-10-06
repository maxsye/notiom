import { Box, Image, Heading, Text, HStack, Spacer, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box px={12} py={10}>
      <HStack align="center" spacing={4}>
        <Image src="NotiomLogo.svg" w={10} />
        <Heading color="#545454" fontSize="3xl">
          Notiom
        </Heading>
        <Spacer />
        <HStack color="black" fontSize="2xs" fontWeight="semibold">
          <Button colorScheme='blue'> 
            Create
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
