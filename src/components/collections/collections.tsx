import './collections.css';

import { ICollection } from '../../models/collection';
import { useCollections } from '../../hooks/useCollections';
import { createCollection, getCollections } from '../../backend';
import { CollectionsForm } from './collections-form';
import { CollectionsItem } from './collections-item';

export async function collectionsLoader() {
  return getCollections();
}

export async function collectionsAction({ request }) {
  const form = await request.formData();
  const name = form.get('name');
  return createCollection(name);
}


export function Collections() {
  const { collections } = useCollections();

  return (
    <div className="collections">
      <ul className="collections-list">
        {collections.map((collection: ICollection) => (
          <CollectionsItem key={collection.id} collection={collection} />
        ))}
      </ul>
      <CollectionsForm />
    </div>
  );
}
