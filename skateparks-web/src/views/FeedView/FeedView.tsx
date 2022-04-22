import React, { useState } from "react";
import FeedPost from "src/components/FeedPost";
import { users } from "../../DummyData";
import CommentsView from "../CommentsView";

import "./FeedView.scss";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;
  const [commentsOpen, setCommentsOpen] = useState<number | null>(null);

  return (
    <div className="FeedView">
      {users.map((user, index) => {
        return (
          <div className="FeedView-postContainer" key={index}>
            <FeedPost
              user={user.handle}
              post={user.posts[0]}
              postIndex={index}
              commentsOpen={commentsOpen}
              setCommentsOpen={setCommentsOpen}
            />
            {commentsOpen === index && (
              <CommentsView
                setCommentsOpen={setCommentsOpen}
                comments={user.posts[0].comments}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeedView;
