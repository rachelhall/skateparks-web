import React from "react";
import { Link } from "react-router-dom";
import AddComment from "src/styleComponents/AddComment";
import Button from "src/styleComponents/Button";
import FeedPostCommentPreview from "../FeedPostCommentPreview";

import "./FeedPostComments.scss";

interface IProps {
  comments?: IComments[];
  commentsOpen: number | null;
  setCommentsOpen: (newValue: number | null) => void;
  postIndex: number;
}

interface IComments {
  user: string;
  comment: string;
}

export const FeedPostComments: React.FC<IProps> = (props) => {
  const { comments, commentsOpen, setCommentsOpen, postIndex } = props;
  const handleCommentsClick = (postIndex: number) => {
    setCommentsOpen(postIndex);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="FeedPostComments">
      {comments && comments.length >= 3 && (
        <Button
          onClick={() => handleCommentsClick(postIndex)}
          className="FeedPostComments-viewAll"
          textButton={true}
        >
          View all {comments.length} comments
        </Button>
      )}
      {comments?.slice(0, 2).map((item) => {
        return (
          <FeedPostCommentPreview
            key={`${item.user}-${item.comment}`}
            user={item.user}
            comment={item.comment}
          />
        );
      })}
      {/* <AddComment comments={comments} /> */}
    </div>
  );
};

export default FeedPostComments;
