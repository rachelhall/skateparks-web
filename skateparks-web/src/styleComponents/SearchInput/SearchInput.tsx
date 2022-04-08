import React from "react";
import TextInput from "../TextInput";
import "./SearchInput.scss";
import cx from "classnames";

interface IProps {
  className?: string;
  onChange?: (newValue: string) => void;
  placeholder?: string;
  value?: string;
}

export const SearchInput: React.FC<IProps> = (props) => {
  const { className, onChange, placeholder, value } = props;
  const mainClass = cx("SearchInput", className);
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={mainClass}
    />
  );
};

export default SearchInput;
