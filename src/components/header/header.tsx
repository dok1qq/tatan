import { Theme, useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const light = theme === Theme.light;

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={toggleTheme}>{light ? 'Light': 'Dark'}</button>
    </div>
  );
}
