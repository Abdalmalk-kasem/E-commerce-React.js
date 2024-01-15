import Section from "/src/components/UI/Section";
import classes from "./authForm.module.css";
import { useSearchParams } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm.jsx";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <Section className={classes.loginSec}>
      {isLogin ? (
        <AuthenticationForm action="login" key="login" />
      ) : (
        <AuthenticationForm action="signup" key="signup" />
      )}
    </Section>
  );
};

export default AuthForm;
