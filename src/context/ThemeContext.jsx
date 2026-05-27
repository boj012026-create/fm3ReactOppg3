import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
  const THEME = {
    LIGHT: "light",
    DARK: "dark"
  }
  const [theme, setTheme] = useState(THEME.LIGHT);

  function toggleTheme() {
    if(theme == THEME.LIGHT) {
      setTheme(THEME.DARK);
    } else {
      setTheme(THEME.LIGHT);
    }
  }

  //update theme in index.css
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('color-scheme', theme)
  }, [theme]);

  const ProviderObj = { theme, toggleTheme };
  return(
    <ThemeContext value={ProviderObj}>{children}</ThemeContext>
  );
}
