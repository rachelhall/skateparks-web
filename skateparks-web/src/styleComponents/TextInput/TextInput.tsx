import React, { useState } from "react";
import cx from "classnames";

import "./TextInput.scss";
import TextInputLabel from "../TextInputLabel";

interface IProps extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  className?: string;
  errorMessage?: string;
  fieldWrapperClassName?: string;
  hasError?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
  inputClassName?: string;
  isRequired?: boolean;
  isSearch?: boolean;
  label?: string;
  labelColor?: string;
  labelSize?: string;
  labelWeight?: string;
  onChange?: (newValue: string) => void;
  onChangeEvent?: (newEvent: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  subLabel?: string;
  value?: string;
  withClear?: boolean;
  withDollarSign?: boolean;
  withPercentSign?: boolean;
}

export const TextInput: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    disabled,
    errorMessage,
    fieldWrapperClassName,
    hasError,
    innerRef,
    inputClassName,
    label,
    labelColor,
    labelSize,
    labelWeight,
    name,
    isRequired,
    isSearch,
    placeholder,
    onChange,
    onChangeEvent,
    onClear,
    subLabel,
    value,
    withClear,
    withDollarSign,
    withPercentSign,
    ...inputProps
  } = props;

  const [defaultValue, setDefaultValue] = useState(placeholder);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeEvent) {
      onChangeEvent(e);
    } else if (onChange) {
      onChange(e.target.value);
    }
  };

  const onClearInputClick = () => {
    if (onChangeEvent) {
      onChangeEvent({
        target: { name: name!, value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (onChange) {
      onChange("");
    }

    if (onClear) {
      onClear();
    }
  };

  const mainClass = cx("TextInput", className);

  return (
    <TextInputLabel
      className={mainClass}
      // color={labelColor}
      // fontSize={labelSize}
      // fontWeight={labelWeight}
      label={label}
      // subLabel={subLabel}
    >
      {/* <div className={inputFieldWrapperClass}>
        {withDollarSign && <p className={styles.dollarSign}>$</p>}
        {isSearch && <SearchIcon className={styles.searchIcon} />} */}

      {children}
      <div className={"TextInput"}>
        <input
          className={mainClass}
          placeholder={defaultValue}
          disabled={disabled}
          name={name}
          onChange={_onChange}
          onFocus={() => setDefaultValue("")}
          onBlur={() => setDefaultValue(placeholder)}
          ref={innerRef}
          value={value}
          {...inputProps}
        />
      </div>
      {/* </div> */}
    </TextInputLabel>
  );
};

export default TextInput;
