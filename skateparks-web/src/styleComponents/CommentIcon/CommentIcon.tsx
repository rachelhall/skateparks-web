import React from "react";
import { ChatbubbleOutline } from "react-ionicons";
import cx from "classnames";

import "./CommentIcon.scss";

interface IProps {
  onClick?: () => void;
  className?: string;
}

export const Comment: React.FC<IProps> = (props) => {
  const { onClick, className } = props;
  const mainClass = cx("CommentIcon", className);
  return (
    <ChatbubbleOutline
      cssClasses={mainClass}
      onClick={onClick}
      color={"#00000"}
      height="29px"
      width="29px"
    />
  );
};

export default Comment;
