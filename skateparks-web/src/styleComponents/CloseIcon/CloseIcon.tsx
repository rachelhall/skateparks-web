import React from "react";
import { CloseOutline } from "react-ionicons";
import cx from "classnames";

import "./CloseIcon.scss";

interface IProps {
  className?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
}

export const CloseIcon: React.FC<IProps> = (props) => {
  const { className, onClick, height = "40px", width = "40px" } = props;

  const mainClass = cx("CloseIcon", className);
  return (
    <CloseOutline
      onClick={onClick}
      cssClasses={mainClass}
      color={"#00000"}
      height={height}
      width={width}
    />
  );
};

export default CloseIcon;
