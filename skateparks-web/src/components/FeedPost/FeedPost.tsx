import React, { useState, useEffect } from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import FeedPostInteractions from "../FeedPostInteractions";
import FeedPostLikedBy from "../FeedPostLikedBy";
import FeedPostCaption from "../FeedPostCaption";
import FileInput from "../../styleComponents/FileInput";
import { IPark } from "src/generated/graphql";
import FeedPostComments from "../FeedPostComments";

interface IComments {
  user: string;
  comment: string;
}

interface IPost {
  location: string;
  src: string[];
  comments: IComments[];
  likedBy: string[];
  savedBy: string[];
  caption?: string;
}

interface IProps {
  user: string;
  post: IPost;
  commentsOpen: number | null;
  setCommentsOpen: (newValue: number | null) => void;
  postIndex: number;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const { user, post, postIndex, commentsOpen, setCommentsOpen } = props;

  // Initial data
  const currentUser = "currentUser";
  const initialLikeState = post.likedBy.includes(currentUser) ? true : false;

  // State for interactions
  const [prevIsLiked, setPrevIsLiked] = useState(initialLikeState);
  const [prevIsSaved, setPrevIsSaved] = useState(false);
  const [postLikedBy, setPostLikedBy] = useState(post.likedBy);
  const totalLikeCount = post.likedBy.length;

  // Toggle likes and saves

  const toggleIsLiked = () => {
    setPrevIsLiked(!prevIsLiked);
    if (prevIsLiked) {
      const filteredLikes = post.likedBy.filter((user) => {
        return user !== currentUser;
      });
      setPostLikedBy(filteredLikes);
    } else {
      postLikedBy.push(currentUser);
    }
  };
  const toggleIsSaved = () => {
    setPrevIsSaved(!prevIsSaved);
  };

  return (
    <div className="FeedPost">
      <FeedPostHeader user={user} location={post.location} />
      <FeedPostContent src={post.src} />
      <div className="FeedPost-bottom">
        <FeedPostInteractions
          onClickLike={toggleIsLiked}
          onClickSave={toggleIsSaved}
          prevIsLiked={prevIsLiked}
          prevIsSaved={prevIsSaved}
          onClickComment={() => setCommentsOpen(postIndex)}
        />
        <FeedPostLikedBy totalLikeCount={totalLikeCount} />

        <FeedPostCaption caption={post.caption} user={user} />
        <FeedPostComments
          postIndex={postIndex}
          comments={post.comments}
          commentsOpen={commentsOpen}
          setCommentsOpen={setCommentsOpen}
        />
      </div>
    </div>
  );
};

export default FeedPost;
