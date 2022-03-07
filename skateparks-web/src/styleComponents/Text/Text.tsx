import React from "react";
import cx from "classnames";

import "./Text.scss";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  fontSize?: "small" | "medium" | "large" | null;
  fontWeight?: "regular" | "bold";
  htmlEntity?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export const Text: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    fontSize = "medium",
    fontWeight = "regular",
    htmlEntity = "p",
    ...rest
  } = props;
  const CustomElement: React.ElementType = htmlEntity;
  const mainClass = cx(
    "Text",
    className,
    fontSize === "small"
      ? "Text-small"
      : fontSize === "medium"
      ? "Text-medium"
      : fontSize === "large"
      ? "Text-large"
      : null
  );
  return (
    <CustomElement className={mainClass} {...rest}>
      {children}
    </CustomElement>
  );
};

export default Text;
