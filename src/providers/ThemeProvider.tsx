import { createContext, Dispatch, SetStateAction, useMemo } from 'react';
import { FunctionComponent, ReactNode, useContext, useState } from 'react';
import darkTheme from '../theme/darkTheme';
import lightTheme from '../theme/lightTheme';

export interface ThemeContextData {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  currentTheme: typeof darkTheme | typeof lightTheme;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useState<Theme>(
    darkThemeMq.matches ? 'dark' : 'light'
  );

  const currentTheme = useMemo(
    () => (theme === 'dark' ? darkTheme : lightTheme),
    [theme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useAppTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
