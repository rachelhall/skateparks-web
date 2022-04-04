import React from "react";

import "./FeedPostCommentPreview.scss";
import Comment from "../../styleComponents/Comment";

interface IProps {
  comments?: any;
}

export const FeedPostCommentPreview: React.FC<IProps> = (props) => {
  const { comments } = props;

  return (
    <div className="FeedPostCommentPreview">
      <Comment user={comments[0].user} comment={comments[0].comment} />
      <Comment user={comments[1].user} comment={comments[1].comment} />
    </div>
  );
};

export default FeedPostCommentPreview;
