import React from "react";

import "./Text.scss";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontSize: "small" | "medium" | "large";
  fontWeight: "regular" | "bold";
  htmlEntity: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export const Text: React.FC<IProps> = (props) => {
  const { children, htmlEntity = "p", ...rest } = props;
  const CustomElement: React.ElementType = htmlEntity;
  return (
    <div className="Text">
      <CustomElement {...rest}>{children}</CustomElement>
    </div>
  );
};

export default Text;
