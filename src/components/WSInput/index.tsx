"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps {
  errors?: FieldError;
  isMultiline?: boolean;
  placeholder?: string;
  className?: string;
  type?: string;
  password?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WSInput = forwardRef((props: InputProps, ref) => {
  const {
    placeholder,
    errors,
    isMultiline = false,
    className = "",
    password = false,
    type,
    handleChange,
    ...rest
  } = props;

  const [isRevealPwd, setIsRevealPwd] = useState(true);

  const inputRef = useRef(null);

  useImperativeHandle(ref, () => inputRef.current);

  return (
    <>
      <input
        ref={inputRef}
        {...rest}
        className="rounded-2xl outline-none px-2 flex-1 ml-2"
        placeholder={props.placeholder}
        type={password && isRevealPwd ? "password" : "text"}
      />
      {password && (
        <div className="flex items-center">
          {!isRevealPwd ? (
            <FontAwesomeIcon
              icon={faEye as IconProp}
              title="Show password"
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash as IconProp}
              title="Hide password"
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          )}
        </div>
      )}
    </>
  );
});
