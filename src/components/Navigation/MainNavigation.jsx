import classes from "./mainNavigation.module.css";
import logo from "/src/assests/logo.webp";
import AnchorLink from "../UI/AnchorLink";
import Image from "../UI/Image";
import MobileNavigation from "./MobileNavigation";
import Links from "./Links";

const MainNavigation = () => {
  const menuHandler = (action) => {
    const linksElement = document.querySelector(`.${classes.links}`);

    if (action === "open") {
      if (linksElement) {
        linksElement.style.right = "0";
      }
    }
    if (action === "close") {
      if (linksElement) {
        linksElement.style.right = "-275px";
      }
    }
  };

  return (
    <header className={`${classes.header}`}>
      <AnchorLink
        className={classes.logo}
        url="home"
        arialabel="Logo that has link to the home page"
      >
        <Image
          imageSrc={logo}
          imageHash="LDNmvU00.8-=~q%LIUIU_N-;ITM{"
          width="140px"
          height="40px"
          alt="Logo"
        />
      </AnchorLink>
      <div className={`${classes.links} d-flex-cc`}>
        <div className={classes.navClose} onClick={() => menuHandler("close")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
          >
            <path
              fill="#1a1a1a"
              d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
            />
          </svg>
        </div>
        <Links />
      </div>
      <MobileNavigation className={classes.mobile} menuHandler={menuHandler} />
    </header>
  );
};

export default MainNavigation;
