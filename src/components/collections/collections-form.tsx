import { SyntheticEvent, useState } from 'react';

interface Props {
  create(name: string): void;
}

export function CollectionsForm({ create }: Props) {
  const [name, setName] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (name.length === 0) return;

    create(name);
    setName('');
  };

  return (
    <form className="collections-form" onSubmit={onSubmit}>
      <input
        className="collections-name"
        type="text" name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Create Collection</button>
    </form>
  );
}
