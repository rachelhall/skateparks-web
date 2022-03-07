import React from "react";

import "./FeedView.scss";
import FeedPost from "../../components/FeedPost";

interface IProps {}

export const FeedView: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="FeedView">
      <FeedPost />
    </div>
  );
};

export default FeedView;
