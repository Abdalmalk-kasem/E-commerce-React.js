import Button from "/src/components/UI/Button.jsx";
import Input from "/src/components/UI/Input.jsx";
import classes from "./authForm.module.css";
import Section from "/src/components/UI/Section.jsx";

const loginInputs = () => {
  return (
    <Section className={classes.loginSec}>
      <h1>Login</h1>
      <div className={classes.message}></div>
      <div className={classes.inputBox}>
        <Input
          type="text"
          placeholder="Username or email"
          id="username"
          autofocus
        />
        <div className={classes.inputMessageError}></div>
      </div>
      <div className={classes.inputBox}>
        <Input type="password" id="password" placeholder="Password" autofocus />
        <div className={classes.inputMessageError}></div>
      </div>
      <Button type="submit" className={classes.normal}>
        Login
      </Button>
      <p className={classes.text}>
        <a href="#">Forget your password?</a>
      </p>
      <p className={classes.text}>
        <a id="linkCreateAccount">Don't have an account? Create account</a>
      </p>
    </Section>
  );
};

export default loginInputs;
