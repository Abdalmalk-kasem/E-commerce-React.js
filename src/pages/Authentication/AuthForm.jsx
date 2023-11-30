import Section from "/src/components/UI/Section";
import classes from "./authForm.module.css";
import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import InputBox from "./InputBox";
import Button from "/src/components/UI/Button";
import AnchorLink from "/src/components/UI/AnchorLink";

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <Section className={classes.loginSec}>
      <Form method="post">
        <div className={classes.container}>
          <h1>{isLogin ? "Login" : "Sign up"}</h1>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
          <div className={classes.messageError}></div>
          <InputBox
            type="email"
            name="email"
            placeholder="Email Adress"
            id="signUpEmail"
            autoFocus
          />
          <InputBox
            type="password"
            name="password"
            id="signUpPassword"
            placeholder="Password"
          />
          <Button type="submit" className="normal" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : isLogin ? "Login" : "Sign Up"}
          </Button>
          <p className={classes.text}>
            <AnchorLink url={`?mode=${isLogin ? "signup" : "login"}`}>
              {isLogin
                ? "Don't have an account? Create account"
                : "Already have an account? Sign in"}
            </AnchorLink>
          </p>
        </div>
      </Form>
    </Section>
  );
};

export default AuthForm;
