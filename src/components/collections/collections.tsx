import './collections.css';

import { ICollection } from '../../models/collection';
import { useCollections } from './useCollections';
import { CollectionsForm } from './collections-form';
import { CollectionsItem } from './collections-item';


export function Collections() {
  const { collections, create, remove } = useCollections();

  return (
    <div className="collections">
      <div className="collections-list">
        {collections.map((collection: ICollection) => (
          <CollectionsItem key={collection.id} collection={collection} remove={remove} />
        ))}
      </div>
      <CollectionsForm create={create} />
    </div>
  );
}
