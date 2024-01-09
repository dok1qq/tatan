import { Theme, useThemeContext } from '../../theme';
import { useCollections } from '../../hooks/useCollections';
import { useTasksContext } from '../../tasks-context';

export function Header() {
  const [theme, setTheme] = useThemeContext();
  const { collections, selectCollection } = useCollections();

  const { load } = useTasksContext();



  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  const light = theme === Theme.light;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {collections.map(collection => {
          return (
            <button
              key={collection.id}
              onClick={() => {
                selectCollection(collection);
                load(collection.id);
              }}
            >
              {collection.name}
            </button>
          );
        })}
      </div>
      <button onClick={toggleTheme}>{light ? 'Light': 'Dark'}</button>
    </div>
  );
}
