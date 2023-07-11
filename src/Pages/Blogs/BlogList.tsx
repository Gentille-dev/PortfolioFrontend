import React from "react";
import { Blog as BlogInterface } from "./blog"; 
import "../../Styles/Navbar.css";

interface BlogListProps {
  blogs: BlogInterface[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
      <div className="about-container">
        <h3 className="blog-pages">Blogs</h3>
        <ul className="blog-list">
          {blogs.map((blog: BlogInterface) => (
            <li key={blog.id} className="blog-item">
              <h4 className="blog-title">{blog.title}</h4>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-author">Author: {blog.author}</p>
              {blog.imageUrl && (
                <img src={blog.imageUrl} alt="Blog" className="blog-image" />
              )}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default BlogList;
