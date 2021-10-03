type optionsType = {
  label?: string;
  value?: string;
  isDisabled?: boolean;
  isFixed?: boolean;
};

export interface DropDownProps {
  options: Array<optionsType>;
  onChange?: (e) => void;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}
