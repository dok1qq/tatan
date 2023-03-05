import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentReference,
  DocumentData,
} from 'firebase/firestore/lite';
import firebaseConfig from '../fb-config';

import { ITask } from './task';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tasksCollection = collection(db, 'tasks');

function taskRef(id: string): DocumentReference<DocumentData> {
  return doc(db, 'tasks', id);
}

async function getTasks(): Promise<ITask[]> {
  const tasksSnapshot = await getDocs(tasksCollection);
  return tasksSnapshot.docs.map(doc => {
    const data = doc.data();

    console.assert(data.label, 'Could not find label in data object');
    console.assert(data.completed, 'Could not find completed in data object');

    return {
      id: doc.id,
      label: data.label,
      completed: data.completed,
    };
  });
}

async function addTask(task: ITask) {
  const result = await addDoc(tasksCollection, {
    label: task.label,
    completed: task.completed,
  });

  const doc = await getDoc(result);
  const data = doc.data();

  if (data) {
    return {
      id: doc.id,
      label: data.label,
      completed: data.completed,
    };
  }

  throw new Error(`Could not create new task`);
}

async function updateTask(task: ITask) {
  const ref = taskRef(task.id);
  await updateDoc(ref, {
    label: task.label,
    completed: task.completed,
  });
}

async function deleteTask(id: string) {
  const ref = taskRef(id);
  await deleteDoc(ref);
}

export default {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
