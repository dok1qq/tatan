import { useState } from 'react';
import { useInit } from './useInit';
import { getCollections } from '../backend';
import { ICollection } from '../models/collection';

export function useCollections() {
  const [selected, setSelected] = useState<ICollection | undefined>();
  const [collections, setCollections] = useState<ICollection[]>([]);

  useInit(() => {
    getCollections().then(items => {
      setCollections(items);
    });
  });

  const selectCollection = (collection: ICollection) => {
    setSelected(collection);
  };

  return {
    collections,
    selected,
    selectCollection,
  };
}
