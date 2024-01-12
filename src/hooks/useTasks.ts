import { useState } from 'react';

import { ITask } from '../models/task';
import {
  createTask,
  deleteTask,
  updateTask,
  getCollection,
} from '../backend';
import { ICollection } from '../models/collection';

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ICollection | undefined>();

  const load = async (collectionId: string) => {
    const tasks = await getCollection(collectionId);
    setTasks(tasks);
  };

  const add = async (label: string) => {
    if (!selected) return;

    const newTask = await createTask(selected.id, label);
    setTasks([...tasks, newTask]);
  };

  const remove = async (id: string) => {
    if (!selected) return;

    await deleteTask(selected.id, id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const update = async (task: ITask) => {
    if (!selected) return;

    await updateTask(selected.id, task);
    setTasks(tasks.map(t => t.id === task.id ? task : t));
  };

  const selectCollection = (collection: ICollection) => {
    setSelected(collection);
  };

  return {
    tasks,
    add,
    remove,
    update,
    load,

    selected,
    selectCollection,
  };
}
