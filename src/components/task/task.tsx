import './task.css';
import React, { useEffect, useState } from 'react';
import { Checkbox } from '@ui-kit/checkbox';

import { ITask } from '../../task';

interface TaskProps {
  task: ITask;
  onTaskChange(task: ITask): void;
  onTaskRemove(id: string | number): void;
}

function Task({ task, onTaskChange, onTaskRemove }: TaskProps) {
  const [label, setLabel] = useState(task.label);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLabelChange(label);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [label]);


  const onCheckboxChange = (value: boolean) => {
    onTaskChange({
      ...task,
      completed: !value,
    });
  };

  const onLabelChange = (label: string) => {
    onTaskChange({
      ...task,
      label,
    });
  };

  return (
    <div className="task">
      <div className="task-content">
        <Checkbox
          id={task.id}
          value={task.completed}
          label=""
          onChange={onCheckboxChange}
        />
        <div
          className="task-label"
          contentEditable
          onInput={e => setLabel(e.currentTarget.innerHTML)}
          data-task-completed={task.completed}
          dangerouslySetInnerHTML={{ __html: task.label }}
        />
      </div>
      <button type="button" onClick={() => onTaskRemove(task.id)}>x</button>
    </div>
  );
}

export default Task;
