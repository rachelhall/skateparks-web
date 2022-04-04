import React, { useState } from "react";
import { Home, HomeOutline } from "react-ionicons";

import "./HomeIcon.scss";

interface IProps {
  onClick?: any;
  isActive: boolean;
}

export const HomeIcon: React.FC<IProps> = (props) => {
  const { isActive, onClick } = props;
  if (isActive) {
    return (
      <Home onClick={onClick} color={"#00000"} height="26px" width="26px" />
    );
  } else {
    return (
      <HomeOutline
        onClick={onClick}
        color={"#00000"}
        height="26px"
        width="26px"
      />
    );
  }
};

export default HomeIcon;
