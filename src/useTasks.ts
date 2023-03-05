import { useEffect, useRef, useState } from 'react';

import { ITask } from './task';
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from './backend';

function createTimer(delay: number, cb: () => void) {
  return setTimeout(() => cb(), delay) as unknown as number;
}

function clearTimer(timer: number): void {
  clearTimeout(timer);
}

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const init = useRef<boolean>(false);
  // const sync = useRef<Map<string, ITask>>(new Map());
  const timer = useRef<number>(0);

  useEffect(() => {
    if (init.current) {
      return;
    }

    init.current = true;
    getTasks().then(items => setTasks(items));
  }, []);


  const add = async (task: ITask) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
    // sync.current.set(task.id.toString(), task);

    // setupTimer();
  };

  const remove = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
    // sync.current.delete(id);

    // setupTimer();
  };

  const update = async (task: ITask) => {
    await updateTask(task);
    setTasks(tasks.map(t => t.id === task.id ? task : t));
    // sync.current.set(task.id.toString(), task);

    // setupTimer();
  };

  const setupTimer = () => {
    if (timer.current !== 0) {
      clearTimer(timer.current);
    }

    timer.current = createTimer(5000, flush);
  }

  const flush = () => {
    timer.current = 0;
    throw new Error('not implemented: flush');
  };

  return {
    tasks,
    add,
    remove,
    update,
  };
}
