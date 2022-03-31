import React, { useState } from "react";
import cx from "classnames";

import "./SelectorInput.scss";
import Text from "../Text/Text";
import { IRailProps } from "../../views/CreateNewParkView/CreateNewParkView";

interface IProps {
  className?: string;
  disabled?: boolean;
  image?: string;
  name: string;
}

export const SelectorInput: React.FC<IProps> = (props) => {
  const { className, children, disabled = false, image, name } = props;

  // State
  const [isSelected, setIsSelected] = useState(false);

  // Click Handler
  const handleClick = () => {
    !disabled && setIsSelected(!isSelected);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);
  };

  const mainClass = cx(
    "SelectorInput",
    className,
    isSelected ? "SelectorInput-selected" : undefined,
    image ? "SelectorInput-withImage" : "SelectorInput-noImage",
    disabled ? "SelectorInput-disabled" : undefined
  );
  return (
    <div className={mainClass} onClick={handleClick}>
      <Text className="SelectorInput-text" fontSize={null}>
        {children}
      </Text>
      {image && <img className="SelectorInput-image" src={image} />}
      <input
        className="SelectorInput-input"
        checked={isSelected}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  );
};

export default SelectorInput;
