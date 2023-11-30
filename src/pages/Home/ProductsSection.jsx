/* eslint-disable react/prop-types */
import Section from "/src/components/UI/Section";
import Products from "/src/components/Products/Products";
import { useRouteLoaderData } from "react-router-dom";
import PageHeader from "/src/components/UI/PageHeader";
import classes from "./productsSection.module.css";

const ProductsSection = ({ start, end, title, paragraph, className }) => {
  const products = useRouteLoaderData("products");
  return (
    <Section sectionPadding>
      <div className={classes.productsContainer}>
        <PageHeader
          title={title}
          paragraph={paragraph}
          className={className}
          noBg
        />
        <Products products={products} start={start} end={end} />
      </div>
    </Section>
  );
};

export default ProductsSection;
