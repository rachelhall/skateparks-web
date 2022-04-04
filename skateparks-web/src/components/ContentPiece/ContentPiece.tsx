import React from "react";
import cx from "classnames";
import "./ContentPiece.scss";

interface IProps {
  className?: string;
  src: string;
  photo?: string;
  video?: string;
}

export const ContentPiece: React.FC<IProps> = (props) => {
  const { className, photo, video, src } = props;
  const mainClass = cx(
    "ContentPiece",
    className,
    video ? "ContentPiece-video" : "ContentPiece-photo"
  );
  return <img src={src} className={mainClass} />;
  // if (photo) {
  //   return <img src={photo} className={mainClass} />;
  // } else {
  //   return <video autoPlay muted src={video} className={mainClass} />;
  // }
};

export default ContentPiece;
