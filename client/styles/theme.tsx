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
          border: '1px solid',
          bg: '#F8F8F8',
          borderColor: '#A3A3A3',
          color: "#545454",
          style: {
            whiteSpace: "normal",
            wordWrap: "break-word",
          }
        },
      },
    },
  },
});

export default theme;
