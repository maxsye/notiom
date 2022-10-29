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
            bg: '#0F6DEB',
          },
        },
      },
    },
  },
});

export default theme;
