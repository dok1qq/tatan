import { useState } from 'react';

import { useInit } from './useInit';
import { ICollection } from '../models/collection';
import { createCollection, getCollections, removeCollection } from '../backend';

export function useCollections() {
  const [collections, setCollections] = useState<ICollection[]>([]);

  useInit(() => {
    getCollections().then(items => {
      setCollections(items);
    });
  });

  const create = async () => {
    const name = prompt('What the collection name be called?', '');
    const item = await createCollection(name);
    setCollections(collections.concat([item]));
  };

  const remove = async (id: string) => {
    await removeCollection(id);
    setCollections(collections.filter(c => c.id !== id));
  };

  return {
    collections,
    create,
    remove,
  };
}
