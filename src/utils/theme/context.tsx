import React, {createContext, useState, useContext, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {colors} from './colors.ts';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  colors: typeof colors.light;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  const value = {
    theme,
    colors: colors[theme],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
