import React from "react";
import cx from "classnames";
import "./ContentPiece.scss";
import { FALLBACK } from "../../static/assets/images";
interface IProps {
  className?: string;
  src?: string;
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

  return <img src={src ?? FALLBACK} alt="skatepark" className={mainClass} />;
};

export default ContentPiece;
