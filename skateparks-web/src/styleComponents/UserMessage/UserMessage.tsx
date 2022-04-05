import React from "react";
import Text from "../Text";
import "./UserMessage.scss";

interface IProps {}

export const UserMessage: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="UserMessage">
      <Text fontSize="small">{children}</Text>
    </div>
  );
};

export default UserMessage;
