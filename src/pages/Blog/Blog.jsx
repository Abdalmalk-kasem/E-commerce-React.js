import PageHeader from "/src/components/UI/PageHeader";
import classes from "./blog.module.css";
import blogImage from "/src/assests/banner/b19.webp";
import Section from "/src/components/UI/Section";
import Blogs from "./Blogs";
import Pagination from "../../components/UI/Pagination";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BlogPage = () => {
  const blogs = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentblogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <PageHeader
        title="#readmore"
        paragraph="Read all case studies about products!"
        id="page-header"
        image={blogImage}
        className={`${classes.blog} d-flex-cc`}
      />
      <Section className={classes.blogsContainer}>
        <Blogs blogs={currentblogs} />
      </Section>
      <Pagination
        productsPerPage={blogsPerPage}
        totalProducts={blogs.length}
        paginate={paginate}
      />
      <NewsLetters />
    </>
  );
};

export default BlogPage;
