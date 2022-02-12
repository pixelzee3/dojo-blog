import BlogList from './BlogList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
