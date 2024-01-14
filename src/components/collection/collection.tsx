import './collection.css';

import { TaskList } from './task-list';
import { TaskForm } from './task-form';
import { createTask, deleteTask, getCollection } from '../../backend';
import { TasksContextProvider } from '../../tasks-context';

export async function collectionLoader({ params }) {
  return getCollection(params.id);
}

export async function collectionAction({ request, params }) {
  const form = await request.formData();
  const label = form.get('label');




  return createTask(params.id, label);
}


export function Collection() {
  return (
    <TasksContextProvider>
      <TaskList />
      <TaskForm />
    </TasksContextProvider>
  );
}
