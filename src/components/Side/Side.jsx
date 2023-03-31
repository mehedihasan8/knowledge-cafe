import React from "react";
import BookmarkTitle from "../BookmarkTitle/BookmarkTitle";

import "./Side.css";
const Side = ({ card, time }) => {
  //   console.log(card);
  let total = 0;
  for (const post of time) {
    total = total + post.minutes;
  }
  return (
    <div className="side-container">
      <div className="spend-time">
        <h3>Spent time on read : {total} min</h3>
      </div>
      <div className="bookmark-section">
        <h3>Bookmarked Blogs : {card.length}</h3>
        <div className="">
          {card.map((singleCard) => (
            <BookmarkTitle singleCard={singleCard}></BookmarkTitle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Side;
