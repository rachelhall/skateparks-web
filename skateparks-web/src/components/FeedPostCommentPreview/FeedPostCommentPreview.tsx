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
      {/* {comments.map((comment, index: Number) => {
        <Comment user={comment.user} comment={comment.comment} key={index} />;
      })} */}
    </div>
  );
};

export default FeedPostCommentPreview;
