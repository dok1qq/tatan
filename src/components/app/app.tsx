import './app.css';

import TaskList from '../task-list/task-list';
import TaskForm from '../task-form/task-form';
import { TasksContextProvider } from '../../tasks-context';

function App() {
  return (
    <div className="app">
      <TasksContextProvider>
        <div className="content">
          <TaskList />
          <TaskForm />
        </div>
      </TasksContextProvider>
    </div>
  );
}

export default App
