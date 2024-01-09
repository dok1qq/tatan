import { useState } from 'react';

import { ITask } from '../models/task';
import {
  createTask,
  deleteTask,
  updateTask,
  getCollection,
} from '../backend';

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const load = async (collectionId: string) => {
    const tasks = await getCollection(collectionId);
    setTasks(tasks);
  };

  const add = async (task: ITask) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const remove = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const update = async (task: ITask) => {
    await updateTask(task);
    setTasks(tasks.map(t => t.id === task.id ? task : t));
  };

  return {
    tasks,
    add,
    remove,
    update,
    load,
  };
}
