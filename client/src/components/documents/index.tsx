import { Grid, GridItem, Link } from '@chakra-ui/react';

const Documents = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" mx={50} my={10} gap={8}>
      <GridItem>
        <Link href="/"></Link>
      </GridItem>
    </Grid>
  );
};
