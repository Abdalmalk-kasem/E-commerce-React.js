/* eslint-disable react/prop-types */
import Image from "/src/components/UI/Image";
import classes from "./blogBox.module.css";

const BlogBox = ({ history, imageSrc, imageAlt, imageHash }) => {
  return (
    <div className={classes.box}>
      <div className={classes.imageBox}>
        <h2>{history}</h2>
        <Image
          imageHash={imageHash}
          imageSrc={imageSrc}
          alt={imageAlt}
          width="500px"
          height="300px"
        />
      </div>
      <div className={classes.des}>
        <h3>The Cotton-Jersey Zip-Up Hoodie</h3>
        <p>
          Kickstarter man braid godard coloring book. Raclette waistcoat selfies
          yr wolf chartreuse hexagon irony. godard...
        </p>
        <a href="#" aria-label="Continue reading">
          CONTINUE READING <span></span>
        </a>
      </div>
    </div>
  );
};

export default BlogBox;
