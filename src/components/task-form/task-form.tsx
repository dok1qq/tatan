import { SyntheticEvent, useState } from 'react';
import './task-form.css';

import { GUID } from '../../guid';
import { ITask } from '../../models/task';
import { useTasksContext } from '../../tasks-context';

function TaskForm() {
  const { add } = useTasksContext();
  const [label, setLabel] = useState('');

  const onSubmitHandle = (e: SyntheticEvent) => {
    e.preventDefault();

    if (label.length === 0) {
      return;
    }

    const task: ITask = {
      id: GUID.create(),
      label,
      completed: false,
    };
    add(task);
    setLabel('');
  };

  return (
    <form className="task-form" onSubmit={onSubmitHandle}>
      <input
        type="text"
        className="task-name"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm;
