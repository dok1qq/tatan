import fb from './firebase';

import { ITask } from './models/task';
import { ICollection } from './models/collection';

export function createTask(collectionId: string, label: string): Promise<ITask> {
  return fb.addTask(collectionId, label);
}

export async function updateTask(collectionId: string, task: ITask) {
  await fb.updateTask(collectionId, task);
  return null;
}

export async function deleteTask(collectionId: string, taskId: string) {
  await fb.deleteTask(collectionId, taskId);
  return null;
}

export function getCollections(): Promise<ICollection[]> {
  return fb.getCollections();
}

export function getCollection(id: string): Promise<ITask[]> {
  return fb.getCollection(id);
}

export function createCollection(name: string): Promise<ICollection> {
  return fb.createCollection(name);
}

export function removeCollection(collectionId: string): Promise<void> {
  return fb.removeCollection(collectionId);
}
