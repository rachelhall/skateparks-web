import React from "react";
import { ArrowBack } from "react-ionicons";
import cx from "classnames";
import "./BackIcon.scss";

interface IProps {
  className?: string;
  color?: string;
  onClick: () => void;
}

export const BackIcon: React.FC<IProps> = (props) => {
  const { className, color = "#00000", onClick } = props;
  const mainClass = cx("BackIcon", className);
  return (
    <ArrowBack
      cssClasses={mainClass}
      onClick={onClick}
      color={color}
      height="29px"
      width="29px"
    />
  );
};

export default BackIcon;
