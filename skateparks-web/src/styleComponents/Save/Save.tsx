import React from "react";
import { BookmarkOutline, Bookmark } from "react-ionicons";

import "./Save.scss";

interface IProps {
  prevIsSaved?: boolean;
  setPrevIsSaved: (value: boolean) => void;
}

export const Save: React.FC<IProps> = (props) => {
  const { prevIsSaved, setPrevIsSaved } = props;
  const toggleSave = () => {
    setPrevIsSaved(!prevIsSaved);
  };

  if (prevIsSaved) {
    return (
      <Bookmark
        onClick={toggleSave}
        color={"black"}
        height="29px"
        width="29px"
      />
    );
  } else {
    return (
      <BookmarkOutline
        onClick={toggleSave}
        color={"#00000"}
        height="29px"
        width="29px"
      />
    );
  }
};

export default Save;
