import React from "react";
import { ArrowBack } from "react-ionicons";

import "./BackIcon.scss";

interface IProps {
  onClick: () => void;
}

export const BackIcon: React.FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <ArrowBack
      cssClasses="BackIcon"
      onClick={onClick}
      color={"#00000"}
      height="29px"
      width="29px"
    />
  );
};

export default BackIcon;
