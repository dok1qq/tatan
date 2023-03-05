import './app.css';

import TaskList from '../task-list/task-list';
import TaskForm from '../task-form/task-form';

import { Header } from '../header/header';
import { ThemeProvider } from '../../theme';
import { TasksContextProvider } from '../../tasks-context';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <TasksContextProvider>
          <div className="content">
            <Header />
            <TaskList />
            <TaskForm />
          </div>
        </TasksContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App
