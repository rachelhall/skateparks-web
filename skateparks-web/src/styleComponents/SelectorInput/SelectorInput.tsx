import React, { useState } from "react";
import cx from "classnames";

import "./SelectorInput.scss";
import Text from "../Text/Text";

interface IProps {
  className?: string;
  disabled?: boolean;
  title?: string;
  onClick?: (arg1: string) => void;
}

export const SelectorInput: React.FC<IProps> = (props) => {
  const { className, children, disabled = false, onClick, title } = props;

  // State
  const [isSelected, setIsSelected] = useState(false);

  // Click Handler
  const handleClick = (title?: string) => {
    !disabled && setIsSelected(!isSelected);
    onClick && title && onClick(title);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);
  };

  const mainClass = cx(
    "SelectorInput",
    className,
    isSelected ? "SelectorInput-selected" : undefined,

    disabled ? "SelectorInput-disabled" : undefined
  );
  return (
    <div className={mainClass} onClick={() => handleClick(title)}>
      <Text className="SelectorInput-text" fontSize={null}>
        {title}
      </Text>

      <input
        className="SelectorInput-input"
        checked={isSelected}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
};

export default SelectorInput;
