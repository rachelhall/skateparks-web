import React, { useState } from "react";
import { AddCircle, AddCircleOutline } from "react-ionicons";

import "./PostIcon.scss";

interface IProps {
  buttonSize: number;
  isActive: boolean;
  onClick?: () => void;
  postIsOpen?: boolean;
}

export const PostIcon: React.FC<IProps> = (props) => {
  const { buttonSize, isActive, onClick, postIsOpen } = props;
  if (postIsOpen) {
    return (
      <AddCircle
        onClick={onClick}
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  } else {
    return (
      <AddCircleOutline
        onClick={onClick}
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  }
};

export default PostIcon;
