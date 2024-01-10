import Stack from '@mui/material/Stack';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import AppBar from './components/AppBar/AppBar';
import CustomSnackbarProvider from './components/CustomSnackbarProvider/CustomSnackbarProvider';
import { useAppTheme } from './providers/ThemeProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HomePage } from './pages/HomePage/index.page';
import { AppDataProvider } from './providers/AppDataProvider';

function App() {
  const { currentTheme } = useAppTheme();

  return (
    <Stack
      height="100%"
      overflow="auto"
      bgcolor={currentTheme.palette.background.default}
    >
      <ThemeProvider theme={responsiveFontSizes(currentTheme)}>
        <AppDataProvider>
          <CustomSnackbarProvider>
            <AppBar />
            <HomePage />
          </CustomSnackbarProvider>
        </AppDataProvider>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
