import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { TextareaAutosizeProps } from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';

interface StyledTextAreaProps extends TextareaAutosizeProps {}

export const StyledTextArea = (props: StyledTextAreaProps) => {
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 12px 12px;
    color: ${theme.palette.mode === 'dark' ? 'white' : 'black'};
    background: ${theme.palette.background.paper};
    border: 1px solid ${theme.palette.primary.main};
    resize: none;
  `
  );

  return <StyledTextarea minRows={1} {...props} />;
};
