import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string | null;
}

type UpdateBlogsFunction = (newBlogs: Blog[]) => void;

interface CreateBlogProps {
  updateBlogs: UpdateBlogsFunction;
}

const CreateBlog: React.FC<CreateBlogProps> = ({ updateBlogs }) => {
  const navigate = useNavigate();


  const [blog, setBlog] = useState<Blog>({
    id: 0,
    title: "",
    description: "",
    author: "",
    imageUrl: null,
  });

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog((prevBlog) => ({
          ...prevBlog,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newBlogWithId = { ...blog, id: Date.now() };

    const updatedBlogs = [...blogs, newBlogWithId];
    setBlogs(updatedBlogs);
  
    
    setBlog({
      id: 0,
      title: "",
      description: "",
      author: "",
      imageUrl: null,
    });
  
    toast.success("Blog created successfully!");
  
   
    updateBlogs(updatedBlogs);
  };

  return (
    <div className="admin-content">
      <h2 className="at-5">Add Blog</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            id="title"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={blog.description}
            onChange={handleChange}
            id="description"
            placeholder="Enter blog description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            id="author"
            placeholder="Enter blog author"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            id="image"
            accept="image/jpg,image/png"
            required
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={handleSubmit}>
            Create Blog
          </button>
        </div>
      </form>
      
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>
              <p>Author: {blog.author}</p>
              {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateBlog;