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
} from 'firebase/firestore/lite';
import firebaseConfig from '../fb-config';

import { ITask } from './models/task';
import { ICollection } from './models/collection';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tasksCollection = collection(db, 'tasks');
const collectionsRef = collection(db, 'collections');

function getTaskRef(collectionId: string, taskId: string) {
  return doc(db, 'collections', collectionId, 'tasks', taskId);
}

async function getCollections(): Promise<ICollection[]> {
  const snapshot = await getDocs(collectionsRef);
  return snapshot.docs.map(doc => {
    const data = doc.data();

    console.assert('name' in data, 'Could not find name in data object');

    return {
      id: doc.id,
      name: data.name,
    };
  });
}

async function getCollection(id: string): Promise<ITask[]> {
  const tasksRef = collection(db, 'collections', id, 'tasks');

  const tasksSnapshot = await getDocs(tasksRef);
  return tasksSnapshot.docs.map(doc => {
    const data = doc.data();

    console.assert('label' in data, 'Could not find label in data object');
    console.assert('completed' in data, 'Could not find completed in data object');

    return {
      id: doc.id,
      label: data.label,
      completed: data.completed,
    };
  });
}

async function addTask(collectionId: string, task: ITask) {
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
  const ref = getTaskRef(task.id);
  await updateDoc(ref, {
    label: task.label,
    completed: task.completed,
  });
}

async function deleteTask(id: string) {
  const ref = getTaskRef(id);
  await deleteDoc(ref);
}

export default {
  addTask,
  updateTask,
  deleteTask,

  getCollection,
  getCollections,
};
