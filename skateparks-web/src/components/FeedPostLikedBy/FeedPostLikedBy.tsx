import React from "react";
import Text from "../../styleComponents/Text";

import "./FeedPostLikedBy.scss";

interface IProps {
  totalLikeCount: number;
  setTotalLikeCount: (value: number) => void;
}

export const FeedPostLikedBy: React.FC<IProps> = (props) => {
  const { totalLikeCount, setTotalLikeCount } = props;

  return (
    <div className="FeedPostLikedBy">
      <Text fontSize="xSmall">
        Liked by
        <Text
          className="FeedPostLikedBy-count"
          fontSize="xSmall"
          fontWeight="bold"
        >
          {totalLikeCount} others
        </Text>
      </Text>
    </div>
  );
};

export default FeedPostLikedBy;
