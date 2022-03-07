import React from "react";
import cx from "classnames";
import "./FeedPostContent.scss";
import FeedPostContentPiece from "../FeedPostContentPiece";
// import fileTypes from "../../DummyData";

interface IProps {
  className?: string;
  fileType?: "photo" | "video";
  src?: string;
  // upload: Array<string>;
}

export const FeedPostContent: React.FC<IProps> = (props) => {
  const { src } = props;

  // Get number of content pieces
  // const numberContentPieces = upload.length;

  // Function to identify file types

  // Function to map over upload array and create content
  // const createContentPieces = () => {
  //     upload.map((file) => {
  //         if
  //     })
  // };
  // Style container based on single or swipe
  const contentContainerClass = cx(
    "FeedPostContent-container",
    numberContentPieces > 1 && "FeedPostContent-container-swipe"
  );
  return (
    <div className="FeedPostContent">
      <div className={contentContainerClass}>
        <FeedPostContentPiece video={src} />
      </div>
    </div>
  );
};

export default FeedPostContent;
