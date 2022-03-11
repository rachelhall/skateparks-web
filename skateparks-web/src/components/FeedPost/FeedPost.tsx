import React, { useState, useEffect } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FeedPostInteractions from "../FeedPostInteractions";
import FeedPostLikedBy from "../FeedPostLikedBy";
import FeedPostCaption from "../FeedPostCaption";
import FileInput from "../../styleComponents/FileInput";

interface IProps {
  user: string;
  className?: string;
  src: Array<string>;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const { src, user } = props;
  const [prevIsLiked, setPrevIsLiked] = useState(false);
  const [prevIsSaved, setPrevIsSaved] = useState(false);
  const [totalLikeCount, setTotalLikeCount] = useState(10);
  const addLike = () => {
    setTotalLikeCount(totalLikeCount + 1);
  };
  const removeLike = () => {
    setTotalLikeCount(totalLikeCount - 1);
  };

  return (
    <div className="FeedPost">
      <FeedPostHeader user={user} location="Nashville, TN" />
      <FeedPostContent src={src} />
      <FeedPostInteractions
        prevIsLiked={prevIsLiked}
        setPrevIsLiked={setPrevIsLiked}
        prevIsSaved={prevIsSaved}
        setPrevIsSaved={setPrevIsSaved}
      />
      <FeedPostLikedBy
        totalLikeCount={totalLikeCount}
        setTotalLikeCount={setTotalLikeCount}
      />
      <FeedPostCaption user={user} />
    </div>
  );
};

export default FeedPost;
