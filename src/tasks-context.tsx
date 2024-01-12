import { createContext, PropsWithChildren, useContext } from 'react';

import { ITask } from './models/task';
import { useTasks } from './hooks/useTasks';
import { ICollection } from './models/collection';

interface ITasksContext {
  tasks: ITask[];
  add(l: string): void;
  update(t: ITask): void;
  remove(id: string): void;
  load(id: string): void;

  selected?: ICollection;
  selectCollection(c: ICollection): void;
}
const TasksContext = createContext<ITasksContext | undefined>(undefined);

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

  if (!context) {
    throw new Error(`TasksContext is not initialized`);
  }

  return context;
}
