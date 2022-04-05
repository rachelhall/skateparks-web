import React, { useState } from "react";
import { Home, HomeOutline } from "react-ionicons";

import "./HomeIcon.scss";

interface IProps {
  buttonSize: number;
  onClick?: any;
  isActive: boolean;
}

export const HomeIcon: React.FC<IProps> = (props) => {
  const { buttonSize, isActive, onClick } = props;
  if (isActive) {
    return (
      <Home
        onClick={onClick}
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  } else {
    return (
      <HomeOutline
        onClick={onClick}
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  }
};

export default HomeIcon;
