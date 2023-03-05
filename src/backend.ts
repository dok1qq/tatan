import fb from './firebase';

import { ITask } from './task';

export async function getTasks(): Promise<ITask[]> {
  return await fb.getTasks();
}

export async function createTask(task: ITask): Promise<ITask> {
  return fb.addTask(task);
}

export async function updateTask(task: ITask): Promise<void> {
  return fb.updateTask(task);
}

export async function deleteTask(id: string): Promise<void> {
  return fb.deleteTask(id);
}
