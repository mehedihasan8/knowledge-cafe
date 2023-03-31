import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Side from "../Side/Side";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState([]);
  const [time, setTime] = useState([]);
  //   const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const handelReadTime = (times) => {
    const newTime = [...time, times];
    setTime(newTime);
  };
  const handelbookmark = (post) => {
    const newCard = [...card, post];
    setCard(newCard);
  };
  return (
    <dir className="home-container">
      <div className="post-container">
        {posts.map((post) => (
          <Post
            post={post}
            handelbookmark={handelbookmark}
            handelReadTime={handelReadTime}
            key={post.id}
          ></Post>
        ))}
      </div>
      <div className="side-container">
        <Side card={card} key={card.id} time={time}></Side>
      </div>
    </dir>
  );
};

export default Home;
