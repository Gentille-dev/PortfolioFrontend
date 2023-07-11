import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Styles/Navbar.css"
import BlogList from './BlogList';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string | null;
}

interface BlogsProps {
  blogs: Blog[];
}

const Blogs: React.FC<BlogsProps> = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/api/v1/blogs/');
      setBlogs(response.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="blog-content">
          <BlogList blogs={blogs} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;