/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

import classes from "./product.module.css";
import React from "react";
import Image from "../UI/Image.jsx";
import AnchorLink from "../UI/AnchorLink.jsx";

const Product = ({ product }) => {
  const { image, imageHash, brand, title, rate, price, oldPrice, id } = product;

  const convertRatingToStars = (rating) => {
    const fullStar = (
      <Icon icon="ic:round-star" style={{ color: "#f3b519" }} width="20"></Icon>
    );
    const halfStar = (
      <Icon
        icon="ic:round-star-half"
        style={{ color: "#f3b519" }}
        width="20"
      ></Icon>
    );
    const stars = [];

    const random = Math.random() * 10000;

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(React.cloneElement(fullStar, { key: i }));
    }

    if (rating % 1 >= 0.25 && rating % 1 < 0.75) {
      stars.push(React.cloneElement(halfStar, { key: random }));
    } else {
      stars.push(React.cloneElement(fullStar, { key: random }));
    }
    return stars;
  };

  const ratingStarsHTML = convertRatingToStars(rate);

  return (
    <div className={classes.product}>
      <Image
        imageSrc={image}
        imageHash={imageHash}
        width="224px"
        height="224px"
        alt={title}
        borderRadius={20}
      />
      <div className={classes.des}>
        <span className={classes.brand}>{brand}</span>
        <span className={classes.title}>{title}</span>
        <div className={classes.rate}>{ratingStarsHTML}</div>
        <footer>
          <div className="prices">
            <span className="price">${price}</span>
            {oldPrice && <span className="oldPrice">${oldPrice}</span>}
          </div>
          <AnchorLink url={`/shop/${id}`} arialabel="view item details">
            <Icon icon="ion:cart-outline" width="26"></Icon>
          </AnchorLink>
        </footer>
      </div>
    </div>
  );
};

export default Product;
