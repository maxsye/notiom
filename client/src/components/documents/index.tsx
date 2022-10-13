import { Button, Image, Grid, GridItem, Link, Text } from '@chakra-ui/react';

const Documents = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" mx={50} my={10} gap={8}>
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
