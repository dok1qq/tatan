import { SyntheticEvent, useState } from 'react';

interface Props {
  create(l: string): void;
}

export function TaskForm({ create }: Props) {
  const [label, setLabel] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (label.length === 0) {
      return;
    }

    create(label);
    setLabel('');
  };

  return (
    <form className="task-form" onSubmit={onSubmit}>
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
