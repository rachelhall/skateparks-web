import React from "react";
import cx from "classnames";
import "./FeedPostContentPiece.scss";

interface IProps {
  src: string;
  photo?: string;
  video?: string;
}

export const FeedPostContentPiece: React.FC<IProps> = (props) => {
  const { photo, video, src } = props;
  const mainClass = cx(
    "FeedPostContentPiece",
    video ? "FeedPostContentPiece-video" : "FeedPostContentPiece-photo"
  );
  return <img src={src} className={mainClass} />;
  // if (photo) {
  //   return <img src={photo} className={mainClass} />;
  // } else {
  //   return <video autoPlay muted src={video} className={mainClass} />;
  // }
};

export default FeedPostContentPiece;
