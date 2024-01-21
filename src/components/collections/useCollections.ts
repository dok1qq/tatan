import { useLoaderData, useRevalidator } from 'react-router-dom';

import { ICollection } from '../../models/collection';
import { createCollection, getCollections, removeCollection } from '../../backend';

export async function collectionsLoader() {
  return getCollections();
}

export function useCollections() {
  const validator = useRevalidator();
  const collections = useLoaderData() as ICollection[];

  const create = async (name: string) => {
    await createCollection(name);
    validator.revalidate();
  };

  const remove = async (collection: ICollection) => {
    await removeCollection(collection.id);
    validator.revalidate();
  };

  return {
    collections,

    create,
    remove,
  };
}
