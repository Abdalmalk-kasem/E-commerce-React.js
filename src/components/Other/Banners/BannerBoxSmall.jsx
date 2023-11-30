/* eslint-disable react/prop-types */
import classes from "./BannerBoxSmall.module.css";
const BannerBoxSmall = ({ className, title, text }) => {
  return (
    <div className={`${classes.bannerBox} ${className}`}>
      <span className={`${classes.heading4}`}>{title}</span>
      <h3>{text}</h3>
    </div>
  );
};

export default BannerBoxSmall;
