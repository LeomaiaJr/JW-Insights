import Typography from '@mui/material/Typography';
import { MessageWrapper } from './styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { ChatMessage } from '../../pages/HomePage/components/Chat/Chat';

interface AIMessageProps {
  messageData: ChatMessage;
  first?: boolean;
  functionCallHandler?: () => void;
}

export const AIMessage = ({ messageData, first = false }: AIMessageProps) => {
  const message = messageData?.content ?? '';
  const isFunctionReturn = messageData?.role === 'function';

  const [typingMessage, setTypingMessage] = useState(!first ? message : '');

  useEffect(() => {
    if (!first) {
      setTypingMessage(message);
      return;
    }

    const typingSpeed = 1000 / message.length;

    let currentCharIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentCharIndex <= message.length) {
        setTypingMessage(message.slice(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [message, first]);

  return (
    <Box display="flex" flexDirection="row" alignItems="end" gap={1}>
      <Avatar src={`${!isFunctionReturn ? '/glados.jpg' : undefined}`}>
        <PsychologyIcon />
      </Avatar>

      <MessageWrapper>
        <Typography>{typingMessage}</Typography>
      </MessageWrapper>
    </Box>
  );
};
