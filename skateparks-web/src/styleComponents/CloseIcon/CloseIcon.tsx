import React from "react";
import { CloseOutline } from "react-ionicons";
import cx from "classnames";

import "./CloseIcon.scss";

interface IProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon: React.FC<IProps> = (props) => {
  const { className, onClick } = props;

  const mainClass = cx("CloseIcon", className);
  return (
    <CloseOutline
      onClick={onClick}
      cssClasses={mainClass}
      color={"#00000"}
      height="40px"
      width="40px"
    />
  );
};

export default CloseIcon;
