import { TextAreaProps } from './types';
const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  value,
  defaultValue,
  className,
  placeHolder,
  readOnly,
  disabled,
  onChange,
  rows,
  cols,
}) => {
  return (
    <textarea
      className={`p-2 w-full resize-none border dark:border-gray-600 rounded-md  bg-light-mode dark:bg-dark-mode text-light-mode-text dark:text-dark-mode-text focus:outline-none focus:ring-1 focus:ring-gray-700 ${
        className ?? ''
      }`}
      defaultValue={defaultValue}
      name={name}
      id={id}
      value={value}
      placeholder={placeHolder}
      readOnly={readOnly}
      disabled={disabled}
      rows={rows}
      cols={cols}
      onChange={onChange}
      maxLength={600}
    ></textarea>
  );
};

export default TextArea;
