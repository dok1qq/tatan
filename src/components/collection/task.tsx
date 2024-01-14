import React, { useEffect, useState } from 'react';
import { Checkbox } from '@ui-kit/checkbox';

import { ITask } from '../../models/task';
import { Form } from 'react-router-dom';

interface TaskProps {
  task: ITask;
  onTaskChange(task: ITask): void;
  onTaskRemove(event: React.MouseEvent<HTMLButtonElement>): void;
}

function Task({ task, onTaskChange, onTaskRemove }: TaskProps) {

  const [label, setLabel] = useState(task.label);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLabelChange(label);
    }, 3000);
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
          dangerouslySetInnerHTML={{ __html: task.label}}
        />
      </div>
      <Form>
        <button
          type="submit"
          data-action="remove"
          data-task-id={task.id}
          onClick={onTaskRemove}
        >
          x
        </button>
      </Form>
    </div>
  );
}

export default Task;
