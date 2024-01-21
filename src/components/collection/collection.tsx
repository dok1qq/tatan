import './collection.css';

import { TaskList } from './task-list';
import { TaskForm } from './task-form';
import { useTasks } from './useTasks';

export function Collection() {
  const { tasks, add, update, remove } = useTasks();

  return (
    <div className="collection">
      <div className="collection-name"></div>
      <TaskList tasks={tasks} update={update} remove={remove} />
      <TaskForm create={add} />
    </div>
  );
}
