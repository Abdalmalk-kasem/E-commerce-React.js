import { Icon } from "@iconify/react";
import classes from "./scrollToTopArrow.module.css";
import { useEffect, useState } from "react";

const ScrollToTopArrow = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 1000 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTOp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTOp}
      className={`${classes.upArrow} ${isActive && classes.active}`}
    >
      <Icon icon="ph:arrow-up" style={{ color: "#e3e6f3" }} width="25" />
    </div>
  );
};

export default ScrollToTopArrow;
