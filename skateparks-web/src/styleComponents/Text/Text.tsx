import React from "react";
import cx from "classnames";

import "./Text.scss";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
<<<<<<< HEAD
  fontSize?: "small" | "medium" | "large" | null;
  fontWeight?: "regular" | "bold";
  htmlEntity?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
=======
  fontSize?: "xSmall" | "small" | "medium" | "large" | null;
  fontWeight?: "regular" | "bold";
  htmlEntity?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
  display?: "flex" | "inline";
  ellipsis?: boolean;
>>>>>>> 11ce64e (Squashing will's commit)
}

export const Text: React.FC<IProps> = (props) => {
  const {
    children,
    className,
<<<<<<< HEAD
=======
    display = "flex",
    ellipsis = false,
>>>>>>> 11ce64e (Squashing will's commit)
    fontSize = "medium",
    fontWeight = "regular",
    htmlEntity = "p",
    ...rest
  } = props;
  const CustomElement: React.ElementType = htmlEntity;
  const mainClass = cx(
    "Text",
    className,
<<<<<<< HEAD
    fontSize === "small"
=======
    fontSize === "xSmall"
      ? "Text-xSmall"
      : fontSize === "small"
>>>>>>> 11ce64e (Squashing will's commit)
      ? "Text-small"
      : fontSize === "medium"
      ? "Text-medium"
      : fontSize === "large"
      ? "Text-large"
<<<<<<< HEAD
      : null
=======
      : null,
    fontWeight === "bold" && "Text-bold",
    display === "inline" ? "Text-inline" : "Text-flex"
>>>>>>> 11ce64e (Squashing will's commit)
  );
  return (
    <CustomElement className={mainClass} {...rest}>
      {children}
    </CustomElement>
  );
};

export default Text;
