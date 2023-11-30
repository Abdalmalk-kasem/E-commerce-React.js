/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Input = forwardRef(({ placeholder, ...props }, ref) => {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      aria-placeholder={placeholder}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
