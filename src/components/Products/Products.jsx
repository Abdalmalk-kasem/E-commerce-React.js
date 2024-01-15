/* eslint-disable react/prop-types */
import Product from "./Product.jsx";
import classes from "./products.module.css";
import { Suspense } from "react";
import LoadingEffect from "../UI/LoadingEffect.jsx";

const Products = ({ products, start, end }) => {
  const productsArr = products.slice(start, end);
  return (
    <Suspense fallback={<LoadingEffect />}>
      <div className={classes.products}>
        {products &&
          productsArr.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </Suspense>
  );
};

export default Products;
