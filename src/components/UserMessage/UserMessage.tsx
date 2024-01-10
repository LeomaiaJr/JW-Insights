import Typography from '@mui/material/Typography';
import { MessageWrapper } from './styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

interface UserMessageProps {
  message: string;
}

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="end" gap={1}>
      <Avatar />

      <MessageWrapper>
        <Typography>{message}</Typography>
      </MessageWrapper>
    </Box>
  );
};
