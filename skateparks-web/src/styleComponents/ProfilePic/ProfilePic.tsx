import React from "react";
import cx from "classnames";

import "./ProfilePic.scss";

interface IProps {
  className?: string;
  size?: "xSmall" | "small" | "medium" | "large";
  image: string;
}

export const ProfilePic: React.FC<IProps> = (props) => {
  const { className, image, size = "medium" } = props;
  const mainClass = cx(
    "ProfilePic",
    className,
    size === "xSmall"
      ? "ProfilePic-xSmall"
      : size === "small"
      ? "ProfilePic-small"
      : size === "medium"
      ? "ProfilePic-medium"
      : "ProfilePic-large"
  );
  return <img className={mainClass} src={image} />;
};

export default ProfilePic;
