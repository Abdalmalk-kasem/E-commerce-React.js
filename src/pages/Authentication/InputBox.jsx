import classes from "./authForm.module.css";
import Input from "/src/components/UI/Input";

const InputBox = ({ placeholder, ...props }) => {
  return (
    <div className={classes.inputBox}>
      <Input
        {...props}
        placeholder={placeholder}
        aria-placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
