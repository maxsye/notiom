import { Button, Image, Grid, GridItem, Link, Text } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react-use-disclosure';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText
} from '@chakra-ui/react'

import { useRef } from 'react';



const Documents = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Grid templateColumns="repeat(6, 1fr)" mx={50} my={10} gap={8}>
      
      <GridItem>
      <Button onClick={onOpen}>
        {/* <Link href="/"></Link> */}
        <Image src="BlueDocument.svg" alt="Notiom logo" />
        
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <form
              id="new-note"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Submitted");
              }}
            >
              <FormControl>
                <FormLabel>Create Document</FormLabel>
                <Input/>
                <FormHelperText>
                  Edit New Document
                </FormHelperText>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" form="new-note">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </GridItem>
      


      <GridItem>
        <Link href="/"></Link>
        <Image src="BlueDocument.svg" alt="Notiom logo" />
      </GridItem>

      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document">
          <Text> Lorem ipsum dolor sit amet, consectetur </Text>
        </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>{' '}
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>{' '}
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>{' '}
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
      <GridItem>
        <Button variant="document"> STUFF </Button>
      </GridItem>
    </Grid>
  );
};

export default Documents;
