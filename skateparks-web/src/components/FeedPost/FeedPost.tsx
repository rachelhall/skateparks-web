import React, { useState, useEffect } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FeedPostInteractions from "../FeedPostInteractions";
import FeedPostLikedBy from "../FeedPostLikedBy";
import FeedPostCaption from "../FeedPostCaption";
import FileInput from "../../styleComponents/FileInput";
import { Park } from "src/generated/graphql";

interface IProps {
  user: string;
  className?: string;
  src: Park | null;
  filesArray: any;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const { src, user, filesArray } = props;
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
      <FeedPostHeader user={user} location={src?.city} />
      <FeedPostContent src={filesArray} />
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
        caption="Lorem ipsum dolor asdfasdfasdfasdfasdfasdf asdf asdf asdflakjsn dfl;aksejnf a;lskefj a;lsefkj a;sdlfkjn as;elfjkn ase;lfjn a;lsekfj as;ldfkjn asdfasdfasdfasdfasdfasdf asdf asdf asdflakjsn dfl;aksejnf a;lskefj a;lsefkj a;sdlfkjn as;elfjkn ase;lfjn a;lsekfj as;ldfkjn "
        user={user}
      />
    </div>
  );
};

export default FeedPost;
