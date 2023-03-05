import { ITask } from '../../task';
import Checkbox from '../checkbox/checkbox';

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
    <div>
      <Checkbox name={task.label} value={task.completed} onChange={onChangeChange} />
      <span>{task.label}</span>
      <button type="button" onClick={() => onTaskRemove(task.id)}>x</button>
    </div>
  );
}

export default Task;
