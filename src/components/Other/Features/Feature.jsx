import Image from "/src/components/UI/Image.jsx";

/* eslint-disable react/prop-types */
const Feature = ({ className, image, alt, text, imageHash }) => {
  return (
    <div className={className}>
      <Image
        imageSrc={image}
        imageHash={imageHash}
        width="152px"
        height="105px"
        alt={alt}
      />
      <span>{text}</span>
    </div>
  );
};

export default Feature;
