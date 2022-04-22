import React from "react";
import { BookmarkOutline, Bookmark } from "react-ionicons";
import cx from "classnames";

import "./Save.scss";

interface IProps {
  prevIsSaved?: boolean;
  onClick: () => void;
  className?: string;
}

export const Save: React.FC<IProps> = (props) => {
  const { prevIsSaved, onClick, className } = props;
  const mainClass = cx("Save", className);
  if (prevIsSaved) {
    return (
      <Bookmark
        cssClasses={mainClass}
        onClick={onClick}
        color={"black"}
        height="29px"
        width="29px"
      />
    );
  } else {
    return (
      <BookmarkOutline
        cssClasses={mainClass}
        onClick={onClick}
        color={"#00000"}
        height="29px"
        width="29px"
      />
    );
  }
};

export default Save;
