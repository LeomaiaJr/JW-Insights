import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';

import IconButton from '@mui/material/IconButton';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { SnackbarUtilsConfigurator } from '../../utils/SnackbarUtils';
import { FunctionComponent } from 'react';

interface ISnackbarCloseButtonProps {
  snackbarKey: SnackbarKey;
}

const SnackbarCloseButton: React.FC<ISnackbarCloseButtonProps> = ({
  snackbarKey,
}) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon
        style={{
          color: 'white',
        }}
      />
    </IconButton>
  );
};

interface CustomSnackbarProviderProps {
  children: React.ReactNode;
}

const CustomSnackbarProvider: FunctionComponent<
  CustomSnackbarProviderProps
> = ({ children }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      action={(snackbarKey) => (
        <SnackbarCloseButton snackbarKey={snackbarKey} />
      )}
      iconVariant={{
        success: (
          <CheckCircleOutlineIcon
            style={{
              marginInlineEnd: '8px',
            }}
          />
        ),
        info: (
          <InfoOutlinedIcon
            style={{
              marginInlineEnd: '8px',
            }}
          />
        ),
        error: (
          <ErrorOutlineIcon
            style={{
              marginInlineEnd: '8px',
            }}
          />
        ),
      }}
      maxSnack={3}
    >
      <>
        <SnackbarUtilsConfigurator />
        {children}
      </>
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
