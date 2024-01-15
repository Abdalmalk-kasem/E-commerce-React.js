/* eslint-disable react/prop-types */
import InputBox from "./InputBox.jsx";
import Button from "/src/components/UI/Button.jsx";
import AnchorLink from "/src/components/UI/AnchorLink.jsx";
import classes from "./authForm.module.css";
import { useAuth } from "/src/contexts/AuthContext.jsx";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationForm = ({ action }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signup, login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue =
      action === "signup" ? confirmPasswordRef.current.value : "";

    if (action === "signup") {
      if (passwordValue !== confirmPasswordValue)
        setError("Passwords do not match");
    }

    try {
      setError("");
      setIsLoading(true);
      action === "signup"
        ? await signup(emailValue, passwordValue)
        : await login(emailValue, passwordValue);
      return navigate("/home");
    } catch (error) {
      setError(
        error.message ||
          `Faild to ${action === "signup" ? "create an account" : "sign in"}`
      );
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={classes.container}>
        <h1>{action === "signup" ? "Sign up" : "Login"}</h1>
        <div className={classes.messageError}>{error && <p>{error}</p>}</div>
        <InputBox
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email Adress"
          id="signUpEmail"
          autoFocus
        />
        <InputBox
          ref={passwordRef}
          type="password"
          name="password"
          id="signUpPassword"
          placeholder="Password"
        />
        {action === "signup" && (
          <InputBox
            ref={confirmPasswordRef}
            type="password"
            name="confirmPasswordRef"
            id="confirmPasswordRef"
            placeholder="Confirm password"
          />
        )}
        <Button type="submit" className="normal" disabled={isLoading}>
          {isLoading
            ? "Submitting..."
            : action === "signup"
            ? "Sign Up"
            : "Login"}
        </Button>
        <p className={classes.text}>
          <AnchorLink url={`?mode=${action === "signup" ? "login" : "signup"}`}>
            {action === "signup"
              ? "Already have an account? Sign in"
              : "Don't have an account? Create account"}
          </AnchorLink>
        </p>
      </div>
    </form>
  );
};
export default AuthenticationForm;
