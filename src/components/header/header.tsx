import { Theme, useThemeContext } from '../../theme';

export function Header() {
  const [theme, setTheme] = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  const light = theme === Theme.light;

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={toggleTheme}>{light ? 'Light': 'Dark'}</button>
    </div>
  );
}
