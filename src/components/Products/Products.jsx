/* eslint-disable react/prop-types */
import { json } from "react-router-dom";
import Product from "./Product";
import classes from "./products.module.css";
import { Suspense } from "react";
import LoadingEffect from "../UI/LoadingEffect";

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
