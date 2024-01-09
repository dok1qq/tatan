import fb from './firebase';

import { ITask } from './models/task';
import { ICollection } from './models/collection';

export function createTask(task: ITask): Promise<ITask> {
  return fb.addTask(task);
}

export function updateTask(task: ITask): Promise<void> {
  return fb.updateTask(task);
}

export function deleteTask(id: string): Promise<void> {
  return fb.deleteTask(id);
}

export function getCollections(): Promise<ICollection[]> {
  return fb.getCollections();
}

export function getCollection(id: string): Promise<ITask[]> {
  return fb.getCollection(id);
}
