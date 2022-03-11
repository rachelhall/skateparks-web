import React from "react";
import { ChatbubbleOutline } from "react-ionicons";

import "./Comment.scss";

interface IProps {}

export const Comment: React.FC<IProps> = (props) => {
  const {} = props;

  return <ChatbubbleOutline color={"#00000"} height="29px" width="29px" />;
};

export default Comment;
