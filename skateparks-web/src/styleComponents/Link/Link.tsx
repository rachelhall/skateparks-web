import React from "react";
import cx from "classnames";

import "./Link.scss";

interface IProps {
  className?: string;
  to: string;
}

export const Link: React.FC<IProps> = (props) => {
  const { children, className, to } = props;

  const mainClass = cx("Link", className);
  return (
    <a className={mainClass} href={to}>
      {children}
    </a>
  );
};

export default Link;
