import React, { useState } from "react";
import { Search, SearchOutline } from "react-ionicons";

import "./SearchIcon.scss";

interface IProps {
  buttonSize: number;
  isActive: boolean;
}

export const SearchIcon: React.FC<IProps> = (props) => {
  const { buttonSize, isActive } = props;
  if (isActive) {
    return (
      <Search
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  } else {
    return (
      <SearchOutline
        color={"#00000"}
        height={`${buttonSize}px`}
        width={`${buttonSize}px`}
      />
    );
  }
};

export default SearchIcon;
