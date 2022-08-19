import React, { useState } from "react";
import { useGetPosts } from "src/api/useGetPosts";
import FeedPost from "src/components/FeedPost";
import { users } from "../../DummyData";
import CommentsView from "../CommentsView";

import "./FeedView.scss";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;
  const [commentsOpen, setCommentsOpen] = useState<number | null>(null);
  const posts = useGetPosts();

  return (
    <div className="FeedView">
      {posts &&
        posts.map((post, index) => {
          return (
            <div className="FeedView-postContainer" key={index}>
              <p>{post.title}</p>
              {/* <FeedPost
            post={post}
              postIndex={index}
              commentsOpen={commentsOpen}
              setCommentsOpen={setCommentsOpen}
            />
            {commentsOpen === index && (
              <CommentsView
                setCommentsOpen={setCommentsOpen}
                comments={user.posts[0].comments}
              />
            )} */}
            </div>
          );
        })}
    </div>
  );
};

export default FeedView;
