import React, { useRef } from "react";
import cx from "classnames";

import "./TextInputLabel.scss";

interface IProps {
  className?: string;
  label?: string;
  subLabel?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  labelRef?: React.RefObject<HTMLLabelElement>;
}

export const TextInputLabel: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    label,
    subLabel,
    fontSize,
    fontWeight,
    color,
    labelRef,
  } = props;

  const mainClass = cx("TextInputLabel", className);

  return (
    <div className="TextInputLabel">
      <label ref={labelRef} className={mainClass}>
        {!!label && <p>{label}</p>}
        {children}
        {!!subLabel && <p>{subLabel}</p>}
      </label>
    </div>
  );
};

export default TextInputLabel;
