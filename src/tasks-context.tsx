import React, { createContext, PropsWithChildren, useContext } from 'react';

import { ITask } from './models/task';
import { useTasks } from './hooks/useTasks';

interface ITasksContext {
  tasks: ITask[];
  collectionId: string;

  add(l: string): void;
  update(t: ITask): void;
  remove(event: React.MouseEvent<HTMLButtonElement>): void;
  load(id: string): void;
}
const TasksContext = createContext<ITasksContext | undefined>(undefined);

interface TasksContextProviderProps {}

export function TasksContextProvider({ children }: PropsWithChildren<TasksContextProviderProps>) {
  const ctx = useTasks() as ITasksContext;

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
