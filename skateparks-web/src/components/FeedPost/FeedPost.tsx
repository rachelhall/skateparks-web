import React from "react";

import "./FeedPost.scss";
import FeedPostHeader from "../FeedPostHeader";
import FeedPostContent from "../FeedPostContent";
import { useGetParkQuery } from "../../graphql/graphql";

interface IProps {
  id?: string;
  className?: string;
  contentPieces?: "single" | "multiple";
  fileType?: "photo" | "video";
  src?: string;
}

export const FeedPost: React.FC<IProps> = (props) => {
  const { id } = props;
  const queryId = id ?? "";

  const { data } = useGetParkQuery({ variables: { getPostId: queryId } });

  return (
    <div className="FeedPost">
      <FeedPostHeader title={data?.getPost.post?.title} />
      <FeedPostContent />
    </div>
  );
};

export default FeedPost;
