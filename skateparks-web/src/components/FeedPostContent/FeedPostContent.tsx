import React from "react";
import cx from "classnames";
import "./FeedPostContent.scss";
import FeedPostContentPiece from "../FeedPostContentPiece";
// import fileTypes from "../../DummyData";

interface IProps {
  src: Array<string>;
}

export const FeedPostContent: React.FC<IProps> = (props) => {
  const { src } = props;
  const contentPieces = src.map((file) => {
    return <FeedPostContentPiece src={file} />;
  });

  // Get number of content pieces

  // Function to map over upload array and create content

  // Style container based on single or swipe
  const contentContainerClass = cx(
    "FeedPostContent-container",
    src.length > 1 && "FeedPostContent-container-swipe"
  );
  return (
    <div className="FeedPostContent">
      <div className={contentContainerClass}>{contentPieces}</div>
    </div>
  );
};

export default FeedPostContent;
