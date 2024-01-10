import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const MessageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  boxShadow: (theme as any).shadows[5],
}));
