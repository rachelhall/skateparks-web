import React from "react";
import Text from "../Text";

import "./FriendMessage.scss";

interface IProps {}

export const FriendMessage: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="FriendMessage">
      <Text fontSize="small">{children}</Text>
    </div>
  );
};

export default FriendMessage;
