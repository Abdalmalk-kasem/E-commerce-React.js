/* eslint-disable react/prop-types */
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
