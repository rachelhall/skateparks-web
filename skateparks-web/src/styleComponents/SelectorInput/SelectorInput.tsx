import React, { useState } from "react";
import cx from "classnames";

import "./SelectorInput.scss";
import Text from "../Text/Text";
<<<<<<< HEAD

interface IProps {
  className?: string;
  image?: string;
}

export const SelectorInput: React.FC<IProps> = (props) => {
  const { className, children, image } = props;
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
=======
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
>>>>>>> 11ce64e (Squashing will's commit)
  };

  const mainClass = cx(
    "SelectorInput",
    className,
<<<<<<< HEAD
    isSelected ? "SelectorInput-selected" : null,
    image ? "SelectorInput-withImage" : "SelectorInput-noImage"
=======
    isSelected ? "SelectorInput-selected" : undefined,
    image ? "SelectorInput-withImage" : "SelectorInput-noImage",
    disabled ? "SelectorInput-disabled" : undefined
>>>>>>> 11ce64e (Squashing will's commit)
  );
  return (
    <div className={mainClass} onClick={handleClick}>
      <Text className="SelectorInput-text" fontSize={null}>
        {children}
      </Text>
      {image && <img className="SelectorInput-image" src={image} />}
<<<<<<< HEAD
      <input className="SelectorInput-input" type="checkbox" />
=======
      <input
        className="SelectorInput-input"
        checked={isSelected}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
>>>>>>> 11ce64e (Squashing will's commit)
    </div>
  );
};

export default SelectorInput;
