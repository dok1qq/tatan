import './checkbox.css';

interface CheckboxProps {
  id: string;
  value: boolean;
  label: string;
  onChange(value: boolean): void;
}

export function Checkbox({ id, value, label, onChange }: CheckboxProps)
{
  const onChangeHandle = (e: any) => {
    onChange(!e.target.checked);
  };

  return (
    <div className="checkbox-wrapper">
      <input
        id={id}
        className="checkbox"
        type="checkbox"
        checked={value}
        onChange={onChangeHandle}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
