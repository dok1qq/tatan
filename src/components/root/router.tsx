import { createBrowserRouter } from 'react-router-dom';

import { App } from '../app/app';
import {
  Collection,
  collectionAction,
  collectionLoader,
  collectionEdit,
  collectionDelete,
} from '../collection/collection';
import {
  Collections,
  collectionsLoader,
  collectionsAction,
} from '../collections/collections';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Collections />,
        loader: collectionsLoader,
        action: collectionsAction,
      },
      {
        path: '/collections/:id',
        element: <Collection />,
        loader: collectionLoader,
        action: collectionAction,
      },
    ]
  }
]);
