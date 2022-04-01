import React from "react";
import { EElement, ERails } from "src/generated/graphql";
import SelectorInput from "src/styleComponents/SelectorInput";

import "./ElementSelector.scss";

interface IProps {
  element: EElement | ERails;
  onClick: () => void;
}

export const ElementSelector: React.FC<IProps> = (props) => {
  const { element, onClick } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="ElementSelector">
      <SelectorInput title={element} onClick={handleClick} />
    </div>
  );
};

export default ElementSelector;
