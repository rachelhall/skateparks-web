import React, { useState } from "react";
import cx from "classnames";

import "./SelectorInput.scss";
import Text from "../Text/Text";

interface IProps {
  className?: string;
  image?: string;
}

export const SelectorInput: React.FC<IProps> = (props) => {
  const { className, children, image } = props;
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const mainClass = cx(
    "SelectorInput",
    className,
    isSelected ? "SelectorInput-selected" : null,
    image ? "SelectorInput-withImage" : "SelectorInput-noImage"
  );
  return (
    <div className={mainClass} onClick={handleClick}>
      <Text className="SelectorInput-text" fontSize={null}>
        {children}
      </Text>
      {image && <img className="SelectorInput-image" src={image} />}
      <input className="SelectorInput-input" type="checkbox" />
    </div>
  );
};

export default SelectorInput;
