import './app.css';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';
import { TasksContextProvider } from '../../tasks-context';

export  function App() {
  return (
    <div className="app">
      <div className="content">
        <TasksContextProvider>
          <Header />
          <Outlet />
        </TasksContextProvider>
      </div>
    </div>
  );
}

export default App;
