import { TaskService } from './task-service';
import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { ITask } from './task';

const service = new TaskService();

interface ITasksContext {
  tasks: ITask[];
  add(t: ITask): void;
  update(t: ITask): void;
  remove(id: string): void;
}
const TasksContext = createContext<ITasksContext>({
  tasks: [],
  add: (t) => {},
  update: (t) => {},
  remove: (id: string) => {},
});

interface TasksContextProviderProps {

}

export function TasksContextProvider({ children }: PropsWithChildren<TasksContextProviderProps>) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      label: 'first',
      completed: false,
    }
  ]);

  const add = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  const remove = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const update = (task: ITask) => {
    setTasks(tasks.map(t => t.id === task.id ? task : t));
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      add,
      remove,
      update,
    }}>
      {children}
    </TasksContext.Provider>
  );
}


export function useTasksContext() {
  const context = useContext(TasksContext);
  return context;
}
