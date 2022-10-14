import { Button, Image, Grid, GridItem, Link, Text } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react-use-disclosure';

import Document from './document';

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
  FormHelperText,
} from '@chakra-ui/react';

import { useRef, useState } from 'react';

const Documents = () => {
  const [text, setText] = useState<String>('');
  const [docs, setDocs] = useState<Array<any>>([]);
  const { isOpen, onClose, onOpen } = useDisclosure();

  function renderDocument(text: String) {
    docs.push(<Document text={text} />);
    setDocs(docs);
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" mx={50} my={10} gap={8}>
      <GridItem>
        <Button variant="openModal" onClick={onOpen}>
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
                    renderDocument(text);
                    setText('');
                    alert('Submitted');
                  }}
                >
                  <FormControl>
                    <FormLabel>Create Document</FormLabel>
                    <Input
                      onChange={(event) => {
                        setText(event.target.value);
                      }}
                    />
                    <FormHelperText>Edit New Document</FormHelperText>
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
        </Button>
      </GridItem>

      {docs.map((item) => {
        return <GridItem>{item}</GridItem>;
      })}
    </Grid>
  );
};

export default Documents;
