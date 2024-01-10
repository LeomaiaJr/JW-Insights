import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const MessageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  overflow: 'hidden',

  '& .MuiTypography-root': {},

  '& .message-typing': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: `2px solid ${theme.palette.text.primary}`,
    animation: 'typing 2s steps(40) infinite',
  },
}));
