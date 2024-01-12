import { createBrowserRouter } from 'react-router-dom';

import App from '../app/app';
import Collection from '../collection/Collection';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
      {
        path: '/collection/:id',
        element: <Collection />,
      },
    ]
  }
]);
