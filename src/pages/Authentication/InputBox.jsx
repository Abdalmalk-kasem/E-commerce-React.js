import { forwardRef } from "react";
import classes from "./authForm.module.css";
import Input from "/src/components/UI/Input";

const InputBox = forwardRef(function InputBox({ placeholder, ...props }, ref) {
  return (
    <div className={classes.inputBox}>
      <Input
        ref={ref}
        {...props}
        placeholder={placeholder}
        aria-placeholder={placeholder}
      />
    </div>
  );
});

export default InputBox;
