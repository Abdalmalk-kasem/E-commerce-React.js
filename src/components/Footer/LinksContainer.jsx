/* eslint-disable react/prop-types */

const LinksContainer = ({ className, title, titleClassName, children }) => {
  return (
    <div className={className}>
      <span className={titleClassName}>{title}</span>
      {children}
    </div>
  );
};

export default LinksContainer;
