import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <img className="post-banner-img" src={post.baner} alt="" />
      <div className="post-info">
        <div className="auther-info">
          <img className="auther-img" src={post.picture} alt="" />
          <div>
            <h3>{post.name}</h3>
            <p>Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className="">
          <p>5 min red..</p>
        </div>
      </div>
      <p className="hastag">
        <small>#beginners </small> <small>#programming</small>
      </p>
      <h1 className="post-title">{post.about}</h1>
      <button className="btn-more">Mark as read...</button>
    </div>
  );
};

export default Post;
