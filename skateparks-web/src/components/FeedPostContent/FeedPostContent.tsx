import React from "react";
import cx from "classnames";
import "./FeedPostContent.scss";
import FeedPostContentPiece from "../FeedPostContentPiece";
// import fileTypes from "../../DummyData";

interface IProps {}

export const FeedPostContent: React.FC<IProps> = (props) => {
  const {} = props;

  // Get number of content pieces

  // Function to map over upload array and create content

  // Style container based on single or swipe
  const contentContainerClass = cx("FeedPostContent-container");
  return (
    <div className="FeedPostContent">
      <div className={contentContainerClass}>
        <FeedPostContentPiece />
      </div>
    </div>
  );
};

export default FeedPostContent;
