/* eslint-disable react/prop-types */
import BlogBox from "./blogBox.jsx";

const Blogs = ({ blogs }) => {
  return (
    <>
      {blogs &&
        blogs.map((blog) => (
          <BlogBox
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
            imageHash={blog.imageHash}
            history={blog.history}
            imageAlt={blog.alt}
          />
        ))}
    </>
  );
};

export default Blogs;
