import React from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";

interface IProps {
  className?: string;
  contentPieces?: "single" | "multiple";
  fileType?: "photo" | "video";
  src?: string;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="FeedPost">
      <FeedPostHeader location="Nashville, TN" />
      <FeedPostContent />
    </div>
  );
};

export default FeedPost;
