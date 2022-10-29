import {
  Box,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Document from '../documents/document';

const Documents = () => {
  const [value, setValue] = useState('');

  const [docText, setDocText] = useState(Array());

  const [edit, setEdit] = useState(false);

  const [orgText, setOrgText] = useState('');

  const createDocument = (newText: string) => {
    if (edit === true) {
      let newDocText = [...docText];
      newDocText[docText.indexOf(orgText)] = newText;
      setDocText(newDocText);

      setOrgText('');
      setEdit(false);
    } else {
      setDocText([...docText, newText]);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        pl={50}
        pr={3}
        my={10}
        gap={8}
        justifyContent="space-between"
      >
        <GridItem>
          <Box as="button" onClick={onOpen}>
            <Image src="/create-document.svg" alt="Create document" w={130} />
          </Box>
        </GridItem>

        {docText.map((text) => {
          return (
            <GridItem key={text}>
              <Document
                coverText={text}
                clickFunc={onOpen}
                setValue={setValue}
                setEdit={setEdit}
                setOrgText={setOrgText}
              />
            </GridItem>
          );
        })}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Text</ModalHeader>
          <ModalCloseButton mr={1} />
          <ModalBody>
            <Input
              placeholder="New document"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              variant="create"
              onClick={() => {
                createDocument(value);
                setValue('');
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Documents;
