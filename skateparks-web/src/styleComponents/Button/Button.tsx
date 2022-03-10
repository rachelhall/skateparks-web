import React from "react";
import cx from "classnames";

import "./Button.scss";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  allowClickWhenDisabled?: boolean;
  ariaLabel?: string;
  buttonRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  color?: "primary" | "secondary" | "black" | "transparent";
  currentTabLinkTo?: string;
  inline?: boolean;
  isLoading?: boolean;
  linkTo?: string;
  onClick?: () => void;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  replace?: boolean;
  buttonSize?:
    | "xSmall"
    | "small"
    | "medium"
    | "large"
    | "full"
    | "fit"
    | undefined;
  borderRadius?: 1 | 2 | 3;
  type?: "submit" | "reset" | "button";
}

export const Button: React.FC<IProps> = (props) => {
  const {
    allowClickWhenDisabled,
    ariaLabel,
    borderRadius = 2,
    buttonRef,
    children,
    className,
    color = "primary",
    currentTabLinkTo,
    disabled,
    inline,
    isLoading,
    linkTo,
    onClick,
    onClickEvent,
    onMouseMove,
    replace,
    buttonSize = "medium",
    type = "button",
    ...buttonProps
  } = props;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!!onClickEvent && !disabled) {
      onClickEvent(e);
    } else if (!!onClick && !disabled) {
      onClick();
    }

    if (allowClickWhenDisabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const mainClass = cx(
    "Button",
    className,
    buttonSize === "xSmall"
      ? "Button-xSmall"
      : buttonSize === "small"
      ? "Button-small"
      : buttonSize === "medium"
      ? "Button-medium"
      : buttonSize === "large"
      ? "Button-large"
      : buttonSize === "fit"
      ? "Button-fit"
      : "Button-full",
    borderRadius === 1
      ? "Button-radius1"
      : borderRadius === 2
      ? "Button-radius2"
      : "Button-radius3",
    color === "primary"
      ? "Button-primary"
      : color === "secondary"
      ? "Button-secondary"
      : color === "black"
      ? "Button-black"
      : "Button-transparent"
  );

  return (
    <button onClick={onClick} className={mainClass}>
      {children}
    </button>
  );
};

export default Button;