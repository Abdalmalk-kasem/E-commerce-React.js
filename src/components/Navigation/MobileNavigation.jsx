/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import AnchorLink from "../UI/AnchorLink";
import classes from "./mainNavigation.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MobileNavigation = ({ className, menuHandler }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const linksElement = document.querySelector(`.${classes.links}`);
    if (linksElement) {
      linksElement.style.right = "-275px";
    }
  }, [pathname]);

  return (
    <>
      <div className={className}>
        <AnchorLink
          className={classes.shoppingBag}
          url="/cart"
          arialabel="shopping cart page"
        >
          <Icon icon="iconamoon:shopping-bag-thin" width="26"></Icon>
        </AnchorLink>
        <div className={classes.navOpen} onClick={() => menuHandler("open")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
