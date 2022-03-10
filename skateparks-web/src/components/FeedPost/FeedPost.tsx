import React, { useState } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FileInput from "../../styleComponents/FileInput";

interface IProps {
  className?: string;
  src: Array<string>;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const { src } = props;

  return (
    <div className="FeedPost">
      <FeedPostHeader location="Nashville, TN" />
      <FeedPostContent src={src} />
    </div>
  );
};

export default FeedPost;
