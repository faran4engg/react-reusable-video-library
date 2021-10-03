import { InputProps } from './types';
const Input: React.FC<InputProps> = ({
  name,
  id,
  value,
  type,
  list,
  autocomplete,
  maxLength,
  className = '',
  placeholder,
  readonly,
  icon,
  withIcon,
  onKeyUp,
  onChange,
}) => {
  const input = (
    <input
      className={`flex-1 border dark:border-gray-600
       px-2 py-2 bg-light-mode dark:bg-dark-mode text-light-mode-text dark:text-dark-mode-text rounded-md appearance-none w-full focus:outline-none focus:ring-1 focus:ring-gray-700  ${className}`}
      type={type || 'text'}
      name={name}
      id={id}
      list={list}
      value={value}
      autoComplete={autocomplete}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readonly}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );

  return withIcon ? (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute right-0 pr-2 mt-1 pointer-events-none">
        {icon}
      </div>
      {input}
    </div>
  ) : (
    input
  );
};

export default Input;
