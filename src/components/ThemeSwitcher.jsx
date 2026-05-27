import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return(
    <>
      <h3>Current theme</h3>
      <h5>{theme}</h5>
      <button onClick={toggleTheme}>Switch Theme</button>
    </>
  );
}
