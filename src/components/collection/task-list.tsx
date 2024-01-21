import { ITask } from '../../models/task';
import Task from './task';

interface Props {
  tasks: ITask[];
  update(t: ITask): void;
  remove(t: ITask): void;
}

export function TaskList({ tasks, update, remove }: Props) {
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
