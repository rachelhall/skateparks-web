import React from "react";
import Button from "../Button";
import Text from "../Text";
import cx from "classnames";

import "./Comment.scss";

interface IProps {
  className?: string;
  user: string;
  comment: string;
  key?: number;
}

export const Comment: React.FC<IProps> = (props) => {
  const { className, comment, user } = props;

  const mainClass = cx("Comment", className);
  return (
    <div className={mainClass}>
      <Button linkTo={`/p/:${user}`} className="Comment-user" textButton={true}>
        {user}
      </Button>
      <Text className="Comment-comment" fontSize="small">
        {comment}
      </Text>
    </div>
  );
};

export default Comment;
