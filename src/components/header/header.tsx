import { useNavigate } from 'react-router-dom';

import { ICollection } from '../../models/collection';
import { useTasksContext } from '../../tasks-context';
import { useCollections } from '../../hooks/useCollections';
import { Theme, useTheme } from '../../hooks/useTheme';

export function Header() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { collections, create, remove } = useCollections();
  const { load, selected, selectCollection } = useTasksContext();

  const onSelectCollection = (collection: ICollection) => {
    selectCollection(collection);
    load(collection.id);
    navigate(`collection/${collection.id}`);
  };

  const removeSelected = () => {
    // remove selected for test
    if (selected) {
      remove(selected.id);
    }
  };

  const light = theme === Theme.light;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {collections.map(collection => {
          return (
            <button
              key={collection.id}
              onClick={() => onSelectCollection(collection)}
            >
              {collection.name}
            </button>
          );
        })}
      </div>

      <div>
        <button onClick={toggleTheme}>{light ? 'Light': 'Dark'}</button>
        <button onClick={create}>New Collection</button>
        <button onClick={removeSelected}>Remove Collection</button>
      </div>
    </div>
  );
}
