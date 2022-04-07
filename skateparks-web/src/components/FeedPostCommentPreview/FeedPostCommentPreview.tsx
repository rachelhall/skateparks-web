import React from "react";

import "./FeedPostCommentPreview.scss";
import Comment from "../../styleComponents/Comment";

interface IProps {
  comments?: IComments[];
}

interface IComments {
  user: string;
  comment: string;
}

export const FeedPostCommentPreview: React.FC<IProps> = (props) => {
  const { comments } = props;
  return (
    <div className="FeedPostCommentPreview">
      {comments &&
        comments.map((comment, index) => {
          <Comment user={comment.user} comment={comment.comment} key={index} />;
        })}
    </div>
  );
};

export default FeedPostCommentPreview;
