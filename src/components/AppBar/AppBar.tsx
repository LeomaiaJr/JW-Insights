import { AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ReactCountryFlag from 'react-country-flag';
import { FunctionComponent } from 'react';
import { Title, TitleWrapper } from './styles';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

const AppBar: FunctionComponent = () => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <TitleWrapper>
          <Title variant="h6">App Name Here</Title>
        </TitleWrapper>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" mr={1}>
            <IconButton onClick={() => {}}>
              <ReactCountryFlag countryCode="US" svg />
            </IconButton>
            <IconButton onClick={() => {}}>
              <ReactCountryFlag countryCode="BR" svg />
            </IconButton>
          </Box>
        </Box>
        <ThemeSelector />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
