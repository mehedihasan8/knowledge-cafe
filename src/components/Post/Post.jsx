import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
const Post = ({ post, handelbookmark, handelReadTime }) => {
  return (
    <div className="post">
      <img className="post-banner-img" src={post.baner} alt="" />
      <div className="post-info">
        <div className="auther-info">
          <img className="auther-img" src={post.picture} alt="" />
          <div>
            <h3>{post.name}</h3>
            <p>
              {post.publisht_in} ( {post.publisht_date} Days ago )
            </p>
          </div>
        </div>
        <div className="">
          <p>
            {post.minutes} min red ..
            <span onClick={() => handelbookmark(post)}>
              <FontAwesomeIcon icon={faBookBookmark} />
            </span>
          </p>
        </div>
      </div>
      <p className="hastag">
        <small>#beginners </small> <small>#programming</small>
      </p>
      <h1 className="post-title">{post.about}</h1>
      <button onClick={() => handelReadTime(post)} className="btn-more">
        Mark as read...
      </button>
    </div>
  );
};

export default Post;
