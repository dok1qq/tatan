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

const collectionsRef = collection(db, 'collections');

function getCollectionRef(collectionId: string) {
  return doc(db, 'collections', collectionId);
}

function getTaskRef(collectionId: string, taskId: string) {
  return doc(db, 'collections', collectionId, 'tasks', taskId);
}

function getTasksRef(collectionId: string) {
  return collection(db, 'collections', collectionId, 'tasks');
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
  const collectionRef = getTasksRef(id);

  const tasksSnapshot = await getDocs(collectionRef);
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

async function createCollection(name: string): Promise<ICollection> {
  const result = await addDoc(collectionsRef, { name });
  const doc = await getDoc(result);

  return {
    id: doc.id,
    name,
  };
}

async function removeCollection(collectionId: string): Promise<void> {
  const ref = getCollectionRef(collectionId);
  return await deleteDoc(ref);
}

async function addTask(collectionId: string, label: string) {
  const tasksRef = getTasksRef(collectionId);

  const result = await addDoc(tasksRef, {
    label,
    completed: false,
  });

  return {
    id: result.id,
    label: label,
    completed: false,
  };
}

async function updateTask(collectionId: string, task: ITask) {
  const ref = getTaskRef(collectionId, task.id);
  await updateDoc<ITask>(ref, {
    label: task.label,
    completed: task.completed,
  });
}

async function deleteTask(collectionId: string, id: string) {
  const ref = getTaskRef(collectionId, id);
  await deleteDoc(ref);
}

export default {
  addTask,
  updateTask,
  deleteTask,

  getCollection,
  getCollections,
  createCollection,
  removeCollection,
};
