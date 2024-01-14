import React, { useState } from 'react';
import { useLoaderData, useParams, useSubmit } from 'react-router-dom';

import { ITask } from '../models/task';
import {
  createTask,
  deleteTask,
  updateTask,
  getCollection,
} from '../backend';
import { ICollection } from '../models/collection';

export function useTasks() {
  const submit = useSubmit();
  const tasks = useLoaderData() as ITask[];
  const { id: collectionId } = useParams();

  console.log(collectionId);

  const load = async (collectionId: string) => {
    // const tasks = await getCollection(collectionId);
    // setTasks(tasks);
  };

  const add = async (label: string) => {
    // const newTask = await createTask(selected.id, label);
    // setTasks([...tasks, newTask]);
  };

  const remove = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    // event.stopPropagation();
    // await deleteTask(selected.id, id);
    // setTasks(tasks.filter(t => t.id !== id));

    submit(event.target as HTMLButtonElement, {
      method: 'post',
      action: `/collections/${collectionId}`,
    });
  };

  const update = async (task: ITask) => {
    // await updateTask(selected.id, task);
    // setTasks(tasks.map(t => t.id === task.id ? task : t));


  };

  return {
    tasks,
    collectionId,

    add,
    remove,
    update,
    load,
  };
}
