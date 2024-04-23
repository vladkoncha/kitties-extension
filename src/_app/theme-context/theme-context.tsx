import { createContext, useContext, useEffect, useState } from 'react';

import { Theme, ThemeProviderProps } from './types';

const ThemeContext = createContext({
  style: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', '🌑');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', '☀️');
    }
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDarkMode) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', '🌑');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        style: theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
