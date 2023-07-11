import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import CreateBlog from '../Dashboard/Blogs/CreateBlog';
import Blogs from './Blogs'; 

export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string | null; 
}

const BlogContainer: React.FC = () => {
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

 
  const updateBlogs: Dispatch<SetStateAction<Blog[]>> = (newBlogs) => {
    setBlogs(newBlogs);
  };

  return (
    <>
      <CreateBlog updateBlogs = {updateBlogs} /> 
      <Blogs blogs={blogs} /> 
    </>
  );
};

export default BlogContainer;