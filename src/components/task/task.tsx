import './task.css';
import { Checkbox } from '@ui-kit/checkbox';

import { ITask } from '../../task';

interface TaskProps {
  task: ITask;
  onTaskChange(task: ITask): void;
  onTaskRemove(id: string | number): void;
}

function Task({ task, onTaskChange, onTaskRemove }: TaskProps) {

  const onChangeChange = (value: boolean) => {
    onTaskChange({
      ...task,
      completed: !value,
    });
  };

  return (
    <div className="task">
      <Checkbox
        id={task.id}
        value={task.completed}
        label={task.label}
        onChange={onChangeChange}
      />
      <button type="button" onClick={() => onTaskRemove(task.id)}>x</button>
    </div>
  );
}

export default Task;
