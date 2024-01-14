import { SyntheticEvent, useRef, useState } from 'react';
import { Form, useSubmit } from 'react-router-dom';

export function CollectionsForm() {
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState('');

  const onSubmit = () => {
    if (!formRef.current) return;
    if (name.length === 0) return;

    submit(formRef.current, {
      method: 'post',
      action: '/',
    });
    setName('');
  };

  return (
    <Form ref={formRef} className="collections-form" onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Create</button>
    </Form>
  );
}
