import Section from "./Section";

/* eslint-disable react/prop-types */
const PageHeader = ({ title, paragraph, image, id, className, noBg }) => {
  return (
    <Section
      id={id}
      className={className}
      style={{
        backgroundImage: image ? `url(${image})` : "",
        backgroundColor: noBg ? "" : "#465b52",
      }}
    >
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </Section>
  );
};

export default PageHeader;
