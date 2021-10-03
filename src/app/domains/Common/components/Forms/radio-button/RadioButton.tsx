import { RadioButtonProps } from './types';

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  text,
  id,
  name,
  value,
  disabled,
  onChange,
  checked,
}) => {
  return (
    <>
      <label className="inline-flex items-center mt-3">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          className={`form-radio h-7 w-7 ${className}`}
        />
        <span className="overflow-hidden ml-2 w-full dark:text-dark-mode-text">
          {text}
        </span>
      </label>
    </>
  );
};

export default RadioButton;
