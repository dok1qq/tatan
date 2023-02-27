import { SyntheticEvent, useId, useState } from 'react';
import { ITask } from '../../task';
import { useTasksContext } from '../../tasks-context';

function TaskForm() {
  const { add } = useTasksContext();
  const [label, setLabel] = useState('');
  const taskId = useId();

  const onSubmitHandle = (e: SyntheticEvent) => {
    e.preventDefault();

    const task: ITask = {
      id: taskId,
      label,
      completed: false,
    };
    add(task);
    setLabel('');
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <input
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm;
