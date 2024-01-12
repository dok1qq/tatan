import { useState } from 'react';
import { useInit } from './useInit';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  useInit(() => {
    updateTheme(theme);
  });

  const updateTheme = (name: Theme): void => {
    setTheme(name);
    document.body.setAttribute('data-theme', name);
  };

  const toggleTheme = (): void => {
    updateTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }

  return {
    theme,
    toggleTheme,
  };
}
