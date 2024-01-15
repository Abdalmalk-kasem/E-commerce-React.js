import AnchorLink from "../../components/UI/AnchorLink.jsx";
import classes from "./landing.module.css";
import Section from "/src/components/UI/Section.jsx";

const Landing = () => {
  return (
    <Section className={classes.landing}>
      <div>
        <span className={classes.tradeIn}>Trade-in-offer</span>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <span className={`${classes.btn} d-flex-cc`} aria-label="shop page">
          <AnchorLink url="/shop" arialabel="shop now">
            Shop Now
          </AnchorLink>
        </span>
      </div>
    </Section>
  );
};
export default Landing;
