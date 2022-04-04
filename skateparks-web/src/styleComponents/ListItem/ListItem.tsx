import React from "react";

import "./ListItem.scss";
import cx from "classnames";

interface IProps {
  bullets?: boolean;
  className?: string;
}

export const ListItem: React.FC<IProps> = (props) => {
  const { bullets = false, children, className } = props;
  const mainClass = cx(
    "ListItem",
    className,
    bullets ? "ListItem-bullets" : undefined
  );
  return <li className={mainClass}>{children}</li>;
};

export default ListItem;
