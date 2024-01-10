import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#272727',
    },
    primary: {
      main: '#009688',
    },
  },
});

export default darkTheme;
