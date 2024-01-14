import { SyntheticEvent, useRef, useState } from 'react';
import { useSubmit } from 'react-router-dom';
import { useTasksContext } from '../../tasks-context';

interface Props {
  collectionId: string;
}

export function TaskForm() {
  const { collectionId } = useTasksContext();


  const submit = useSubmit();
  const [label, setLabel] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (label.length === 0) {
      return;
    }

    submit(formRef.current, {
      method: 'post',
      action: `/collections/${collectionId}`,
    });
    setLabel('');
  };

  return (
    <form ref={formRef} className="task-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="task-name"
        name="label"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
