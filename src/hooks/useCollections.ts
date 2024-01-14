import { useLoaderData } from 'react-router-dom';

import { ICollection } from '../models/collection';

export function useCollections() {
  const collections = useLoaderData() as ICollection[];

  return {
    collections,
  };
}
