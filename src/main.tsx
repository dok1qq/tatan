import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './components/root/Root';

render();

function render() {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
}

