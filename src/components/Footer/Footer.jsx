import AnchorLink from "../UI/AnchorLink";
import LinksContainer from "./LinksContainer";
import logo from "/src/assests/logo.webp";
import classes from "./Footer.module.css";
import { Icon } from "@iconify/react";

import googlePlayImg from "/src/assests/pay/play.webp";
import appStoreImg from "/src/assests/pay/app.webp";
import paymentImg from "/src/assests/pay/pay.webp";

const Footer = () => {
  return (
    <>
      <footer className={`${classes.footer} section-p1 section-m1`}>
        <div className={`${classes.col} cotact`}>
          <img
            src={logo}
            style={{ width: "140px", height: "40px" }}
            alt="Our logo"
            className={classes.logo}
          />
          <span className={classes.heading4}>Contact</span>
          <div className={classes.contactBox}>
            <p>
              <strong>Adress: </strong>962 Jordan, Street 32, Amman
            </p>
            <p>
              <strong>Phone: </strong>+96212345678/(+9)234567890
            </p>
            <p>
              <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
            </p>
          </div>
          <div className={`${classes.col} ${classes.socialBox}`}>
            <span className={classes.heading4}>Follow Us</span>
            <div className={classes.social}>
              <AnchorLink url="#" arialabel="my facebook account">
                <Icon icon="ri:facebook-fill" width="20"></Icon>
              </AnchorLink>
              <AnchorLink url="#" arialabel="my twitter account">
                <Icon icon="ri:twitter-x-fill" width="20"></Icon>
              </AnchorLink>
              <AnchorLink url="#" arialabel="my instagram account">
                <Icon icon="uil:instagram" width="20"></Icon>
              </AnchorLink>
              <AnchorLink url="#" arialabel="my youtube account">
                <Icon icon="uil:youtube" width="20"></Icon>
              </AnchorLink>
            </div>
          </div>
        </div>
        <LinksContainer
          className={`${classes.col} about`}
          title="About Us"
          titleClassName={classes.heading4}
        >
          <AnchorLink url="about" arialabel="about us">
            About Us
          </AnchorLink>
          <AnchorLink url=".." arialabel="Delivery Information">
            Delivery Information
          </AnchorLink>
          <AnchorLink url=".." arialabel="Privacy Policy">
            Privacy Policy
          </AnchorLink>
          <AnchorLink url=".." arialabel="Terms & Condtions">
            Terms & Condtions
          </AnchorLink>
          <AnchorLink url="contact" arialabel="Contact Us">
            Contact Us
          </AnchorLink>
          <AnchorLink url="sources" arialabel="Sources">
            Sources
          </AnchorLink>
        </LinksContainer>
        <LinksContainer
          className={`${classes.col} my-acc`}
          title="My Account"
          titleClassName={classes.heading4}
        >
          <AnchorLink url="auth?mode=login" arialabel="Sign in">
            Sign In
          </AnchorLink>
          <AnchorLink url="cart" arialabel="view cart">
            View Cart
          </AnchorLink>
          <AnchorLink url="cart" arialabel="My Wishlist">
            My Wishlist
          </AnchorLink>
          <AnchorLink url="cart" arialabel="Track My Order">
            Track My Order
          </AnchorLink>
          <AnchorLink url="#" arialabel="Help">
            Help
          </AnchorLink>
        </LinksContainer>
        <div className={`${classes.col} installApp`}>
          <span className={classes.heading4}>Install App</span>
          <span>From App Store or Google Play</span>
          <div className={classes.links}>
            <img
              src={appStoreImg}
              style={{ width: "170px", height: "48px" }}
              alt="App store"
            />
            <img
              src={googlePlayImg}
              style={{ width: "170px", height: "48px" }}
              alt="Google play store"
            />
          </div>
          <div className={classes.payment}>
            <span>Secured Payment Getways</span>
            <div className={classes.paymentMethods}>
              <img
                src={paymentImg}
                style={{ width: "224px", height: "32px" }}
                alt="Pay Methods"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={classes.rights}>
        &copy;
        <span>{new Date().getFullYear()}</span>, Made with
        <span className={classes.heart}>&#10084;</span> by
        <span className={classes.name}>Abdalmalk</span>
      </div>
    </>
  );
};

export default Footer;
