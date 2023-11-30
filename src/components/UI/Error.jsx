import { useLocation, useRouteError } from "react-router-dom";
import AnchorLink from "./AnchorLink";
import classes from "./error.module.css";

const Error = () => {
  const error = useRouteError();
  const location = useLocation();

  let title = "An error occured!",
    message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found!";
    message = `Sorry, the page ${location.pathname} could not be found.`;
  }

  return (
    <div className={`${classes.error} `}>
      <h1>{title}</h1>
      <p>{message}</p>
      <AnchorLink url="/home" arialabel="home page">
        Go back to home page
      </AnchorLink>
    </div>
  );
};

export default Error;
