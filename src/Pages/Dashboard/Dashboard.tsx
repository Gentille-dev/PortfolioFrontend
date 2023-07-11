import React from "react";
import MiddleSection from "./MiddleSection";
import LeftSection from "./Sidebar";
import TopSection from "./TopSection";
import { Message } from "./Messages/AdminContext";
import { getMessages } from "./Messages/api";
import Blog from "../Blogs/blog";
import BlogList from "../Blogs/BlogList";


const Dashboard: React.FC = () => {
  const [messageData, setMessageData] = React.useState<Message[]>([]);
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://127.0.0.1:4000/api/v1/blogs/");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs: Network response not OK.");
      }
      const data = await response.json();
      if (!Array.isArray(data.data)) {
        throw new Error("Failed to fetch blogs: Unexpected data format.");
      }
      const blogsArray = data.data as Blog[]; 
      return blogsArray;
    } catch (error) {
      throw new Error("Failed to fetch blogs.");
    }
  };
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await getMessages();
        setMessageData(messages);
  
        const fetchedBlogs = await fetchBlogs();
        console.log("Fetched blogs:", fetchedBlogs);
        setBlogs(fetchedBlogs);
  
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <TopSection />
    <div className="app">
      <LeftSection />
      <div className="right-section">
 
        <MiddleSection />
        <BlogList blogs={blogs} /> 
      </div>
    </div>
  </>
  );
};

export default Dashboard;