import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const TitleWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
});

export const Title = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'start',
  },
}));
