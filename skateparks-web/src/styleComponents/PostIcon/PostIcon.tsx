import React, { useState } from "react";
import { AddCircle, AddCircleOutline } from "react-ionicons";

import "./PostIcon.scss";

interface IProps {
  isActive: boolean;
}

export const PostIcon: React.FC<IProps> = (props) => {
  const { isActive } = props;
  if (isActive) {
    return <AddCircle color={"#00000"} height="26px" width="26px" />;
  } else {
    return <AddCircleOutline color={"#00000"} height="26px" width="26px" />;
  }
};

export default PostIcon;
