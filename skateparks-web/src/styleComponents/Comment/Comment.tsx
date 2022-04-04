import React from "react";
import Button from "../Button";
import Text from "../Text";

import "./Comment.scss";

interface IProps {
  user: string;
  comment: string;
}

export const Comment: React.FC<IProps> = (props) => {
  const { comment, user } = props;

  return (
    <div className="Comment">
      <Button linkTo="#" className="Comment-user" textButton={true}>
        {user}
      </Button>
      <Text className="Comment-comment" fontSize="small">
        {comment}
      </Text>
    </div>
  );
};

export default Comment;
