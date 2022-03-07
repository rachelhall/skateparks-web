import React from "react";
import cx from "classnames";

import "./Footer.scss";

interface IProps {
  className?: string;
}

export const Footer: React.FC<IProps> = (props) => {
  const { children, className } = props;

  const mainClass = cx("Footer", className);
  return <div className={mainClass}>{children}</div>;
};

export default Footer;
