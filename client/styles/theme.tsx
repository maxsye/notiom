import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    fonts: {
      heading: `'DM Sans', sans-serif`,
      text: `'DM Sans', sans-serif`,
    },
  },
  components: {
    Button: {
      variants: {
        create: {
          bg: '#2F80ED',
          color: 'white',
          _hover: {
            bg: 'white',
            borderWidth: '10px',
            borderColor: 'brown',
            color: 'green',
          },
        },
        document: {
          width: '150px',
          height: '150px',
          border: 'solid',
          bg: '#2F80ED',
        },
      },
    },
  },
});

export default theme;
