import React from "react";
import { HeartOutline, Heart } from "react-ionicons";
import cx from "classnames";

import "./Like.scss";

interface IProps {
  onClick: () => void;
  prevIsLiked?: boolean;
  className?: string;
}

export const Like: React.FC<IProps> = (props) => {
  const { prevIsLiked = false, onClick, className } = props;
  const mainClass = cx("Like", className);

  if (prevIsLiked) {
    return (
      <Heart
        cssClasses={mainClass}
        onClick={onClick}
        color={"red"}
        height="29px"
        width="29px"
      />
    );
  } else
    return (
      <HeartOutline
        cssClasses={mainClass}
        onClick={onClick}
        color={"#00000"}
        height="29px"
        width="29px"
      />
    );
};

export default Like;
