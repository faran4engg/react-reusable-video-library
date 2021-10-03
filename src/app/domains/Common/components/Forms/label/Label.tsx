import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({
  className = '',
  children,
  id,
  htmlFor,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 text-theme-color-light dark:text-theme-color-dark my-1 ${className}`}
      id={id}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
