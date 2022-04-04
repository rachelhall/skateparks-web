import React, { useState } from "react";
import { ChatbubbleEllipses, ChatbubbleEllipsesOutline } from "react-ionicons";

import "./MessagesIcon.scss";

interface IProps {
  isActive: boolean;
}

export const MessagesIcon: React.FC<IProps> = (props) => {
  const { isActive } = props;

  if (isActive) {
    return <ChatbubbleEllipses color={"#00000"} height="26px" width="26px" />;
  } else {
    return (
      <ChatbubbleEllipsesOutline color={"#00000"} height="26px" width="26px" />
    );
  }
};

export default MessagesIcon;
