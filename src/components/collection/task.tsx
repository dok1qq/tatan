import React, { useState } from 'react';
import { Checkbox } from '@ui-kit/checkbox';

import { ITask } from '../../models/task';
import { Form } from 'react-router-dom';

interface TaskProps {
  task: ITask;
  onTaskChange(task: ITask): void;
  onTaskRemove(task: ITask): void;
}

function Task({ task, onTaskChange, onTaskRemove }: TaskProps) {
  const [label, setLabel] = useState(task.label);

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

  const onBlurHandler = () => {
    if (label.length && label !== task.label) {
      onLabelChange(label);
    }
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
          onBlur={onBlurHandler}
          data-task-completed={task.completed}
          dangerouslySetInnerHTML={{ __html: task.label}}
        />
      </div>
      <Form>
        <button
          type="submit"
          data-action="remove"
          onClick={() => onTaskRemove(task)}
        >
          x
        </button>
      </Form>
    </div>
  );
}

export default Task;
