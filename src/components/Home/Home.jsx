import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <dir className="home-container">
      <div className="post-container">
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
      <div className="side-container">
        <h1>side</h1>
      </div>
    </dir>
  );
};

export default Home;
