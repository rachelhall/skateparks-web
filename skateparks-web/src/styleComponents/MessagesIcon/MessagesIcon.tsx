import React, { useState } from "react";
import { ChatbubbleEllipses, ChatbubbleEllipsesOutline } from "react-ionicons";

import "./MessagesIcon.scss";

interface IProps {
  buttonSize: number;
  isActive: boolean;
}

export const MessagesIcon: React.FC<IProps> = (props) => {
  const { buttonSize, isActive } = props;

  if (isActive) {
    return (
      <ChatbubbleEllipses
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  } else {
    return (
      <ChatbubbleEllipsesOutline
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  }
};

export default MessagesIcon;
