/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import AnchorLink from "../UI/AnchorLink.jsx";
import Button from "../UI/Button.jsx";
import { Icon } from "@iconify/react";
import classes from "./mainNavigation.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";

const Links = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout, currentUser, error } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
    } catch {
      error("Faild to sign out");
    }
  };

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        setIsLoggedIn(currentUser);
      }, 500);
    }
  }, [currentUser]);

  return (
    <>
      <AnchorLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        url="home"
        arialabel="home page"
      >
        Home
      </AnchorLink>
      <AnchorLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        url="shop"
        arialabel="shop page"
      >
        Shop
      </AnchorLink>
      <AnchorLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        url="blog"
        arialabel="blog page"
      >
        Blog
      </AnchorLink>
      <AnchorLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        url="about"
        arialabel="about page"
      >
        About
      </AnchorLink>
      <AnchorLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        url="contact"
        arialabel="contact page"
      >
        contact
      </AnchorLink>
      {!isLoggedIn && (
        <AnchorLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          url="auth?mode=login"
          arialabel="login page"
        >
          Login
        </AnchorLink>
      )}
      {isLoggedIn && (
        <Form onSubmit={handleLogout}>
          <Button className={classes.logoutBtn}>Logout</Button>
        </Form>
      )}
      <AnchorLink
        className={classes.shoppingBag}
        url="/cart"
        arialabel="shopping cart page"
      >
        <Icon icon="iconamoon:shopping-bag-thin" width="26"></Icon>
      </AnchorLink>
    </>
  );
};

export default Links;
