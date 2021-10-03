import CreatableSelect from 'react-select/creatable';
import { DropDownProps } from './types';

const customStyles = {
  control: provided => ({
    ...provided,
    background: 'inherit',
    color: 'inherit',
    borderColor: '#4B5563 !important',
  }),
  menu: provided => ({
    ...provided,
    color: 'gray',
  }),
  singleValue: provided => ({
    ...provided,
    background: 'inherit',
    color: 'inherit',
  }),
  valueContainer: provided => ({
    ...provided,
    background: 'inherit',
    color: 'inherit',
  }),
  input: provided => ({
    ...provided,
    background: 'inherit',
    color: 'inherit',
  }),
};

const DropDown: React.FC<DropDownProps> = ({
  value,
  options,
  onChange,
  isMulti,
  isClearable,
  isSearchable,
}) => {
  return (
    <CreatableSelect
      styles={customStyles}
      isMulti={isMulti}
      isClearable={isClearable}
      isSearchable={isSearchable}
      onChange={onChange}
      options={options}
      value={value}
    />
  );
};

export default DropDown;
