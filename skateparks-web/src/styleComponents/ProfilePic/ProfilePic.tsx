import React from "react";
import cx from "classnames";

import "./ProfilePic.scss";

interface IProps {
  className?: string;
  size?: "xSmall" | "nav" | "small" | "medium" | "large";
  image: string;
  isActive?: boolean;
}

export const ProfilePic: React.FC<IProps> = (props) => {
  const { className, image, isActive, size = "medium" } = props;
  const mainClass = cx(
    "ProfilePic",
    className,
    size === "xSmall"
      ? "ProfilePic-xSmall"
      : size === "small"
      ? "ProfilePic-small"
      : size === "medium"
      ? "ProfilePic-medium"
      : size === "large"
      ? "ProfilePic-large"
      : "ProfilePic-nav"
  );
  return <img className={mainClass} src={image} />;
};

export default ProfilePic;
