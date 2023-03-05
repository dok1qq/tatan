import { createContext, PropsWithChildren, useContext } from 'react';

import { ITask } from './task';
import { useTasks } from './useTasks';
import { TaskService } from './task-service';

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

interface TasksContextProviderProps {}

export function TasksContextProvider({ children }: PropsWithChildren<TasksContextProviderProps>) {
  const ctx = useTasks();

  return (
    <TasksContext.Provider value={ctx}>
      {children}
    </TasksContext.Provider>
  );
}


export function useTasksContext() {
  const context = useContext(TasksContext);
  return context;
}
