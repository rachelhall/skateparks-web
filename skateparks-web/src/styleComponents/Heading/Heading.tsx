import React from "react";
import cx from "classnames";

import "./Heading.scss";
import Text from "../Text/Text";

interface IProps {
  center?: boolean;
  className?: string;
  fontSize?: "small" | "medium" | "large";
}

export const Heading: React.FC<IProps> = (props) => {
  const { center = false, children, className, fontSize = "medium" } = props;

  const mainClass = cx(
    "Heading",
    className,
    fontSize === "small"
      ? "Heading-small"
      : fontSize === "medium"
      ? "Heading-medium"
      : "Heading-large",
    center ? "Heading-center" : null
  );
  return (
    <Text className={mainClass} fontSize={null}>
      {children}
    </Text>
  );
};

export default Heading;
