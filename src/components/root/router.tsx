import { createBrowserRouter } from 'react-router-dom';

import { App } from '../app/app';
import { Collection } from '../collection/collection';
import { Collections } from '../collections/collections';
import { collectionLoader } from '../collection/useTasks';
import { collectionsLoader } from '../collections/useCollections';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Collections />,
        loader: collectionsLoader,
      },
      {
        path: '/collections/:id',
        element: <Collection />,
        loader: collectionLoader,
      },
    ]
  }
]);
