import { FunctionComponent } from 'react';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppTheme } from '../../providers/ThemeProvider';

const ThemeSelector: FunctionComponent = () => {
  const { theme, setTheme } = useAppTheme();

  return (
    <ToggleButtonGroup
      exclusive
      aria-label="Theme"
      value={theme}
      onChange={(_, value) => {
        if (value) setTheme(value as 'light' | 'dark');
      }}
      style={{
        height: '40px',
      }}
    >
      <ToggleButton role="light" value="light">
        <BrightnessHighIcon
          style={{
            color: '#fff',
          }}
        />
      </ToggleButton>
      <ToggleButton role="dark" value="dark">
        <Brightness2Icon
          style={{
            color: '#fff',
          }}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeSelector;
