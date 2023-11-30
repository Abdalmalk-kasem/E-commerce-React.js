import Section from "/src/components/UI/Section";
import classes from "./callAction.module.css";

const CallAction = () => {
  return (
    <Section className={`${classes.callAction} d-flex-cc`}>
      <span>Repair Services</span>
      <h2>
        Up to <span>70% Off</span>- All t-Shirts & Accessories
      </h2>
      <button className="normal">Explore More</button>
    </Section>
  );
};

export default CallAction;
