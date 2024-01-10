/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/system';

export const ExampleWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.grey[300]}`,
  boxShadow: (theme as any).shadows[5],
  cursor: 'pointer',
}));
