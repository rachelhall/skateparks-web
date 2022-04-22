import React from "react";

import "./FeedPostCommentPreview.scss";
import Comment from "../../styleComponents/Comment";

interface IProps {
  user: string;
  comment: string;
}

export const FeedPostCommentPreview: React.FC<IProps> = (props) => {
  const { user, comment } = props;

  return (
    <Comment className="FeedPostCommentPreview" user={user} comment={comment} />
  );
};

export default FeedPostCommentPreview;
