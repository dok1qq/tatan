import { ITask } from '../../models/task';
import Task from './task';
import { useTasksContext } from '../../tasks-context';

export function TaskList() {
  const { tasks, update, remove } = useTasksContext();

  return (
    <div className="task-list">
      {tasks.map((task: ITask) => {
        return (
          <Task
            key={task.id}
            task={task}
            onTaskChange={update}
            onTaskRemove={remove}
          />
        );
      })}
    </div>
  );
}
