import { createContext, PropsWithChildren, useContext } from 'react';

import { ITask } from './models/task';
import { useTasks } from './hooks/useTasks';
import { TaskService } from './models/task-service';

const service = new TaskService();

interface ITasksContext {
  tasks: ITask[];
  add(t: ITask): void;
  update(t: ITask): void;
  remove(id: string): void;
  load(id: string): void;
}
const TasksContext = createContext<ITasksContext | undefined>();

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
