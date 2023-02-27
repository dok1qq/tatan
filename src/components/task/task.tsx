import { ITask } from '../../task';
import Checkbox from '../checkbox/checkbox';

interface TaskProps {
  task: ITask;
  onTaskChange(task: ITask): void;
}

function Task({ task, onTaskChange }: TaskProps) {

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
    </div>
  );
}

export default Task;
