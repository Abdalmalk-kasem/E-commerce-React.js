/* eslint-disable react/prop-types */
import classes from "./BannerBox.module.css";
const BannerBox = ({ className, title, paragraph, btnText, header }) => {
  return (
    <div className={`${classes.bannerBox} ${className}`}>
      {header && <span className={classes.heading4}>{header}</span>}
      <h2>{title}</h2>
      <span>{paragraph}</span>
      <button className="white">{btnText}</button>
    </div>
  );
};

export default BannerBox;
