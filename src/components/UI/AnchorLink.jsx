/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const AnchorLink = ({ url, arialabel, children, ...props }) => {
  return (
    <NavLink to={url} aria-label={arialabel} {...props}>
      {children}
    </NavLink>
  );
};
export default AnchorLink;
