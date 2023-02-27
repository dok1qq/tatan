interface CheckboxProps {
  name: string;
  value: boolean;
  onChange(value: boolean): void;
}

function Checkbox({ name, value, onChange }: CheckboxProps)
{
  const onChangeHandle = (e: any) => {
    onChange(!e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChangeHandle}
      name={name}
    />
  )
}

export default Checkbox;
