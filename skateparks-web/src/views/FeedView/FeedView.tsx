import React from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";
import { gql, useQuery } from "@apollo/client";
import { usePostsQuery } from "../../graphql/graphql";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;

  const { data } = usePostsQuery();

  console.log({ data });

  return (
    <div className="FeedView">
      {data?.listPosts.posts?.map((post) => (
        <FeedPost id={post?.id} />
      ))}
    </div>
  );
};

export default FeedView;
