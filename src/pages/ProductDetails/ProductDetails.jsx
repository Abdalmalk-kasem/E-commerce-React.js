import { useEffect, useState } from "react";
import Image from "/src/components/UI/Image.jsx";
import Section from "/src/components/UI/Section.jsx";
import classes from "./productDetails.module.css";
import { useParams, useRouteLoaderData } from "react-router-dom";
import AddToCartForm from "/src/pages/ProductDetails/AddToCartForm.jsx";
import LoadingEffect from "/src/components/UI/LoadingEffect.jsx";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);

  const products = useRouteLoaderData("products");
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  const { title, image, imageHash, price, oldPrice, id } = product;

  useEffect(() => setMainImage(image), [image]);
  const imageClickHandler = (event) => {
    setMainImage(event.target.src);
  };

  if (!product) {
    return <LoadingEffect />;
  }

  return (
    <Section className={`${classes.productDetails} d-flex-cc`} sectionPadding>
      <div className={classes.singleProImage}>
        <div className={classes.singleImg}>
          <Image
            imageSrc={mainImage}
            imageHash={imageHash}
            width="500px"
            height="500px"
            className="active"
            id="main-image"
            alt="product main color (color)"
          />
        </div>
        <div className={classes.smallImagesGroup}>
          <div>
            <Image
              imageSrc="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-29287.appspot.com/o/images%2Ff1.webp?alt=media&token=b09fe595-9378-4e3c-a643-33a857bd0216"
              imageHash="fnPGW|j@_4kCRPoetRfRV@j?bIay%gjsM{WXRjoKxufjR*a#n$j?ozWrRjslt7S5"
              width="121px"
              height="121px"
              className={classes.smallImage}
              alt="product second color (color)"
              onClick={imageClickHandler}
            />
          </div>
          <div>
            <Image
              imageSrc="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-29287.appspot.com/o/images%2Ff2.webp?alt=media&token=e8fba738-7dfc-4ed4-9cdc-33044e3a3a1c"
              imageHash="feP%Imof_4WCRjoft7ayWBj@ayju%NjtM{j[V@WVxuayR*ofn%WBxufQRPWVogof"
              width="121px"
              height="121px"
              className={classes.smallImage}
              alt="product third color (color)"
              onClick={imageClickHandler}
            />
          </div>
          <div>
            <Image
              imageSrc="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-29287.appspot.com/o/images%2Ff3.webp?alt=media&token=e06d890a-90e9-4596-8c51-1e4be90afd75"
              imageHash="fsPP.Rof?wayRjjtt8fjV@ayfkj[%NayRPfQRjj[tRayWBj[aea|t7j[RifQozf6"
              width="121px"
              height="121px"
              className={classes.smallImage}
              alt="product fourth color (color)"
              onClick={imageClickHandler}
            />
          </div>
          <div>
            <Image
              imageSrc="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-29287.appspot.com/o/images%2Ff4.webp?alt=media&token=7df60a6d-e7e1-48d8-883e-0b775e65314c"
              imageHash="fMQm6boL_NofMxs:a}ayofofWBWUx]j[Rjf6WAayx]kCWBaeV@kCx]j[M{ayt7j["
              width="121px"
              height="121px"
              className={classes.smallImage}
              alt="product fifth color (color)"
              onClick={imageClickHandler}
            />
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <h3 className={classes.productName}>{title}</h3>
        <div className="prices">
          <h4 className={classes.price}>${price}</h4>
          {oldPrice && <h3 className="oldPrice">${oldPrice}</h3>}
        </div>
        <AddToCartForm
          key={mainImage}
          imageSrc={mainImage}
          product={{ title, imageHash, price, id }}
        />
        <div className={classes.productD}>
          <h3>Product Details</h3>
          <p>
            The {title} is made feim substlantiol 6.0oz. per sq. yd. fabric
            constructed from 100% cotton, this classic fit preshrunk jersey knit
            provides unmatched comfort with each wear. Featuring a toped neck
            and shoulder, and a seamless double-needle collor. and available in
            range of colors, it offers it all in unltimate head-turning package.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ProductDetails;
