/* eslint-disable react/prop-types */
import Image from "/src/components/UI/Image.jsx";
import classes from "./member.module.css";

const Member = ({ imageSrc, imageHash, alt, name, title, phone, email }) => {
  return (
    <div className={classes.member}>
      <Image imageSrc={imageSrc} imageHash={imageHash} alt={alt} />
      <div className={classes.text}>
        <span className="heading-4">{name}</span>
        <p>{title}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Member;
