import { SyntheticEvent, useState } from 'react';
import './task-form.css';

import { useTasksContext } from '../../tasks-context';

export function TaskForm() {
  const { add } = useTasksContext();
  const [label, setLabel] = useState('');

  const onSubmitHandle = (e: SyntheticEvent) => {
    e.preventDefault();

    if (label.length === 0) {
      return;
    }

    add(label);
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
