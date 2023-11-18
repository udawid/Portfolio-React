import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum",
      author: "Marcin",
      id: 1,
    },
    {
      title: "My new website",
      body: "Lorem ipsum",
      author: "Dawid",
      id: 2,
    },
    {
      title: "My new website",
      body: "Lorem ipsum",
      author: "Łukasz",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("Marcin");

  useEffect(() => {
    console.log("use effect");
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Marcin")}
        title="Marcin's blogs!"
      /> */}
      <button onClick={() => setName("Marcel")}> Change Name</button>
      <p>{name}</p>
    </div>
  );
};
export default Home;
