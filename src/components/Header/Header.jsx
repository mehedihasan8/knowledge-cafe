import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <h1 className="nav-title">Knowledge Cafe</h1>
      <div className="header-items">
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/joint">Joint</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
