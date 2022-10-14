import { Button } from '@chakra-ui/react';

interface DocumentProps {
  text: String;
}

const Document = (props: DocumentProps) => {
  return <Button variant="document"> {props.text} </Button>;
};

export default Document;
