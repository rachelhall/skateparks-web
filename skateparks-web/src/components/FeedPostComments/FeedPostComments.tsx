import React from "react";
import AddComment from "src/styleComponents/AddComment";
import Button from "src/styleComponents/Button";
import FeedPostCommentPreview from "../FeedPostCommentPreview";

import "./FeedPostComments.scss";

interface IProps {
  comments?: IComments[];
  user: string;
}

interface IComments {
  user: string;
  comment: string;
}

export const FeedPostComments: React.FC<IProps> = (props) => {
  const { comments, user } = props;
  const commentCount = comments && comments.length;
  return (
    <div className="FeedPostComments">
      <Button className="FeedPostComments-viewAll" textButton={true}>
        View all {commentCount} comments
      </Button>
      <FeedPostCommentPreview comments={comments} />
      <AddComment user={user} />
    </div>
  );
};

export default FeedPostComments;
