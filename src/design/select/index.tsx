import { useEffect, useRef, useState } from "react";
import { ISelectCheck } from "@ptypes/navigation/ISelectCheck";
import { SelectCheckUI } from "./interface";

const SelectCheck = (props: ISelectCheck) => {
  const {
    id,
    name,
    options,
    value,
    disabled = false,
    fullwidth = false,
    label,
    message,
    onBlur,
    onChange,
    onChangeCheck,
    onClick,
    onFocus,
    placeholder,
    readonly = false,
    required = false,
    size = "wide",
    status = "pending",
  } = props;

  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setDisplayList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;
    onClick && onClick(e);
    setDisplayList(!displayList);
  };

  return (
    <SelectCheckUI
      displayList={displayList}
      id={id}
      name={name}
      options={options}
      value={value}
      disabled={disabled}
      focused={focused}
      fullwidth={fullwidth}
      label={label}
      message={message}
      onBlur={handleBlur}
      onChange={onChange}
      onChangeCheck={onChangeCheck}
      onClick={handleClick}
      onFocus={handleFocus}
      placeholder={placeholder}
      readonly={readonly}
      ref={selectRef}
      required={required}
      size={size}
      status={status}
    />
  );
};

export { SelectCheck };
export type { ISelectCheck };
