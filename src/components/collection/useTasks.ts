import { useLoaderData, useParams, useRevalidator } from 'react-router-dom';

import { ITask } from '../../models/task';
import {
  createTask,
  deleteTask,
  updateTask,
  getCollection,
} from '../../backend';

export async function collectionLoader({ params }) {
  return getCollection(params.id);
}

export function useTasks() {
  const validator = useRevalidator();

  const tasks = useLoaderData() as ITask[];
  const { id: collectionId } = useParams();

  const add = async (label: string) => {
    if (!collectionId) return;

    await createTask(collectionId, label);
    validator.revalidate();
  };

  const remove = async (task: ITask) => {
    if (!collectionId) return;

    await deleteTask(collectionId, task.id);
    validator.revalidate();
  };

  const update = async (task: ITask) => {
    if (!collectionId) return;

    await updateTask(collectionId, task);
    validator.revalidate();
  };

  return {
    tasks,

    add,
    remove,
    update,
  };
}
