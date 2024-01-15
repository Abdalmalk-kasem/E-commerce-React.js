import { useRef } from "react";
import classes from "./NewsLetters.module.css";
import Section from "/src/components/UI/Section.jsx";
import Input from "../../UI/Input.jsx";
import Button from "../../UI/Button.jsx";

const NewsLetters = () => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  return (
    <Section className={classes.newsletters} sectionPadding>
      <div className={classes.text}>
        <span className={classes.heading4}>Sign Up For NewsLetters</span>
        <p>
          Get E-mail updates about our lastest shop and
          <span> special offers.</span>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} type="email" placeholder="Your email adress" />
        <Button type="submit" className={`${classes.btn} normal`}>
          Sign Up
        </Button>
      </form>
    </Section>
  );
};

export default NewsLetters;
