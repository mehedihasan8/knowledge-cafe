import React from "react";
import "./BookmarkTitle.css";

const BookmarkTitle = ({ singleCard }) => {
  return (
    <div className="single">
      <p>{singleCard.about}</p>
    </div>
  );
};

export default BookmarkTitle;
