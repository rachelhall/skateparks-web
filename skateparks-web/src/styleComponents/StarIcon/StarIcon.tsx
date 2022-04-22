import React from "react";
import { Star } from "react-ionicons";
import cx from "classnames";

import "./StarIcon.scss";

interface IProps {
  className?: string;
  height?: number;
  width?: number;
}

export const StarIcon: React.FC<IProps> = (props) => {
  const { className, height = 30, width = 30 } = props;
  const mainClass = cx("StarIcon", className);
  const h = `${height}px`;
  const w = `${width}px`;
  return <Star cssClasses={mainClass} color={"gold"} height={h} width={w} />;
};

export default StarIcon;
