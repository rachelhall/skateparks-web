import React, { useState } from "react";
import { Search, SearchOutline } from "react-ionicons";

import "./SearchIcon.scss";

interface IProps {
  isActive: boolean;
}

export const SearchIcon: React.FC<IProps> = (props) => {
  const { isActive } = props;
  if (isActive) {
    return <Search color={"#00000"} height="26px" width="26px" />;
  } else {
    return <SearchOutline color={"#00000"} height="26px" width="26px" />;
  }
};

export default SearchIcon;
