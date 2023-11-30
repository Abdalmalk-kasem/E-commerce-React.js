import { useState } from "react";
import PageHeader from "/src/components/UI/PageHeader";
import pageHeaderImage from "/src/assests/banner/b1.webp";
import Products from "/src/components/Products/Products";
import Pagination from "../../components/UI/Pagination";
import { useRouteLoaderData } from "react-router-dom";
import Section from "/src/components/UI/Section";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters";

const Shop = () => {
  const products = useRouteLoaderData("products");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PageHeader
        title="#stayhome"
        paragraph="Save more with coupons & up to 70% off!"
        image={pageHeaderImage}
        id="page-header"
        className="shop d-flex-cc"
      />
      <Section sectionPadding>
        <Products
          products={products}
          start={indexOfFirstProduct}
          end={indexOfLastProduct}
        />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </Section>
      <NewsLetters />
    </>
  );
};

export default Shop;
