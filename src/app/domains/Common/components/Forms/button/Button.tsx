import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  children,
  disabled = false,
  onClick,
  icon,
  withIcon,
}) => {
  const button = (
    <button
      type={type}
      className={`${
        withIcon ? 'justify-center group inline-flex items-center' : ''
      } py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md focus:outline-none 
			${className ?? ''} ${disabled ? 'opacity-20 cursor-not-allowed' : ''}
			`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );

  return withIcon ? <div className="text-center">{button}</div> : button;
};

export default Button;
