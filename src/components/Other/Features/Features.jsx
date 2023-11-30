import Section from "/src/components/UI/Section";
import Feature from "./Feature";
import classes from "./Features.module.css";

import f1 from "/src/assests/features/f1.webp";
import f2 from "/src/assests/features/f2.webp";
import f3 from "/src/assests/features/f3.webp";
import f4 from "/src/assests/features/f4.webp";
import f5 from "/src/assests/features/f5.webp";
import f6 from "/src/assests/features/f6.webp";

const Features = () => {
  return (
    <Section className={classes.features} sectionPadding>
      <div className={`${classes.ourFeatures}`}>
        <Feature
          className={`${classes.col} ${classes.pink} d-flex-cc`}
          image={f1}
          imageHash="L6K.I[9F00?H2x%M~VD*8wM{k=%N"
          alt="Free Shipping Feature"
          text="Free Shipping"
        />
        <Feature
          className={`${classes.col} ${classes.green} d-flex-cc`}
          image={f2}
          imageHash="LALh0v0K00~p7ztRrrIA9Goy^k4n"
          alt="Online Order Feature"
          text="Online Order"
        />
        <Feature
          className={`${classes.col} ${classes.lightBlue} d-flex-cc`}
          image={f3}
          imageHash="LMLhYdWB05oz.ARjD~oJH~NGxtR+"
          alt="Save Money Feature"
          text="Save Money"
        />
        <Feature
          className={`${classes.col} ${classes.darkBlue} d-flex-cc`}
          image={f4}
          imageHash="L5KB?xW6005u.AEM5i,,009G~EK4"
          alt="Promotions Feature"
          text="Promotions"
        />
        <Feature
          className={`${classes.col} ${classes.purple} d-flex-cc`}
          image={f5}
          imageHash="LDK_OXRo00oz.TNY9Ynik*E0Vtbc"
          alt="Happy Sell Feature"
          text="Happy Sell"
        />
        <Feature
          className={`${classes.col} ${classes.orange} d-flex-cc`}
          image={f6}
          imageHash="L8Kne:Iv0t%K.T9Z4.^k154.}mxu"
          alt="F24/7 Support Feature"
          text="F24/7 Support"
        />
      </div>
    </Section>
  );
};

export default Features;
