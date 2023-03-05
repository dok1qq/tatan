import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

export enum Theme {
    light = 'light',
    dark = 'dark',
}

type ThemeType = [Theme, (name: Theme) => void];

export const ThemeContext = createContext<ThemeType>([Theme.dark, (name: Theme) => {}]);

function useTheme(currentTheme: Theme): ThemeType {
    const [theme, setTheme] = useState<Theme>(currentTheme);

    useEffect(() => {
        updateTheme(currentTheme);
    }, [currentTheme]);

    const updateTheme = (name: Theme): void => {
        setTheme(name);
        document.body.setAttribute('data-theme', name);
    };

    return [theme, updateTheme];
}

interface ThemeProviderProps {
    current?: Theme;
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
    const { children, current } = props;

    const value = useTheme(current || Theme.dark);

    return (
      <ThemeContext.Provider value={value}>
          {children}
      </ThemeContext.Provider>
    );
}

export function useThemeContext(): ThemeType {
    return useContext(ThemeContext);
}
