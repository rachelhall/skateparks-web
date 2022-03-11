import React, { useState } from "react";
import cx from "classnames";
import "./FeedPostContent.scss";
import FeedPostContentPiece from "../FeedPostContentPiece";
import Button from "../../styleComponents/Button";
// import fileTypes from "../../DummyData";

interface IProps {
  src: Array<string>;
}

export const FeedPostContent: React.FC<IProps> = (props) => {
  const { src } = props;

  // State for setting which content piece is displayed
  const [currentPiece, setCurrentPiece] = useState(0);

  // Functions to go back / forward one piece

  const forward = () => {
    length > 1 &&
      currentPiece < src.length - 1 &&
      setCurrentPiece(currentPiece + 1);
  };

  const back = () => {
    length > 1 && currentPiece !== 0 && setCurrentPiece(currentPiece - 1);
  };

  // Number of files in array
  const length = src.length;

  // Array for rendered content pieces
  const contentPieces: Array<JSX.Element> = [];

  // Function to generate content JSX elemtn and push to contentPieces array
  const createContentPiece = () => {
    src.map((file, index) => {
      contentPieces.push(<FeedPostContentPiece key={index} src={file} />);
    });
  };

  // Run function to generate content
  createContentPiece();

  // Style container based on single or swipe
  const contentContainerClass = cx(
    "FeedPostContent-container",
    src.length > 1 && "FeedPostContent-container-swipe"
  );

  return (
    <div className="FeedPostContent">
      <div className={contentContainerClass}>{contentPieces[currentPiece]}</div>
      {src.length > 1 && (
        <div className="FeedPostContent-swipeDotContainer">
          {src.map((file, index) => {
            const swipeDotClass = cx(
              "FeedPostContent-swipeDot",
              currentPiece === index && "FeedPostContent-swipeDot-active"
            );
            return (
              <div onClick={forward} className={swipeDotClass} key={index} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FeedPostContent;
