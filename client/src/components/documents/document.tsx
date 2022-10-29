import { Box, Text } from '@chakra-ui/react';

interface documentProps {
  coverText: string;
  clickFunc: any;
  setValue: any;
  setEdit: any;
  setOrgText: any;
}

const Document = (props: documentProps) => {
  return (
    <Box
      w={130}
      h={130}
      bg="#F8F8F8"
      color="#545454"
      border="2px"
      borderColor="#A3A3A3"
      borderRadius={10}
      as="button"
      onClick={() => {
        props.clickFunc();
        props.setValue(props.coverText);
        props.setEdit(true);
        props.setOrgText(props.coverText);
      }}
    >
      <Text color="#545454" align="center" fontSize="lg">
        {props.coverText.length > 40
          ? props.coverText.substring(0, 37) + '...'
          : props.coverText}
      </Text>
    </Box>
  );
};

export default Document;
