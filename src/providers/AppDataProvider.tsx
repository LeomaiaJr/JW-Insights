import { createContext, Dispatch, SetStateAction } from 'react';
import { FunctionComponent, ReactNode, useContext, useState } from 'react';

export interface AppDataContextData {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const AppDataContext = createContext<AppDataContextData>(
  {} as AppDataContextData
);

interface AppDataProviderProps {
  children: ReactNode;
}

export const AppDataProvider: FunctionComponent<AppDataProviderProps> = ({
  children,
}) => {
  const browserLanguage = navigator.language.split(/[-_]/)[0];

  const [language, setLanguage] = useState<string>(browserLanguage);

  return (
    <AppDataContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export function useAppData(): AppDataContextData {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
