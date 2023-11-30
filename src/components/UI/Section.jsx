/* eslint-disable react/prop-types */
const Section = ({ className, sectionPadding, children, ...props }) => {
  return (
    <section
      className={`${className ? className : ""} ${
        sectionPadding ? "section-p1" : ""
      }`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
