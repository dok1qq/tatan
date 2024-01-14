import './app.css';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';

export function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
