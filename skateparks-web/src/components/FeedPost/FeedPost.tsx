import React, { useState, useEffect } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FeedPostInteractions from "../FeedPostInteractions";
import FeedPostLikedBy from "../FeedPostLikedBy";
import FeedPostCaption from "../FeedPostCaption";
import FileInput from "../../styleComponents/FileInput";
import { Park } from "src/generated/graphql";
import FeedPostComments from "../FeedPostComments";

interface IProps {
  user: string;
  className?: string;
  comments?: any;
  // src: Park | null;
  filesArray: any;
  location: string | undefined;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const {
    comments,
    // src,
    user,
    filesArray,
    location,
  } = props;
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
      <FeedPostHeader user={user} location={location} />
      <FeedPostContent src={filesArray} />
      <div className="FeedPost-bottom">
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

        <FeedPostCaption
          caption="We chillin n shit this skatepark dope af"
          user={user}
        />
        <FeedPostComments user={user} comments={comments} />
      </div>
    </div>
  );
};

export default FeedPost;
