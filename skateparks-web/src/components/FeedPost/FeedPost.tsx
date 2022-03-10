import React, { useState } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FileInput from "../../styleComponents/FileInput";

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
