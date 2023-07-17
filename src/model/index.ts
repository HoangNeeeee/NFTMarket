import { FieldError } from "react-hook-form";

export interface InputProps {
    errors?: FieldError;
    isMultiline?: boolean;
    placeholder?: string;
    className?: string;
    type?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }