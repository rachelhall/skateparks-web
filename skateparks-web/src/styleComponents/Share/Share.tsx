import React from "react";
import { SendOutline } from "react-ionicons";
import cx from "classnames";

import "./Share.scss";

interface IProps {
  className?: string;
}

export const Share: React.FC<IProps> = (props) => {
  const { className } = props;
  const mainClass = cx("Share", className);
  return (
    <SendOutline
      cssClasses={mainClass}
      color={"#00000"}
      height="28px"
      width="28px"
    />
  );
};

export default Share;
