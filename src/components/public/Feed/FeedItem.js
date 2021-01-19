import React from "react";

const FeedItem = (props) => {
  return (
    <div className="feed-item">
      <div className="feed-title-block">
        <img src={props.item.thumbnail} alt="thumbnail" />
        <a href={props.item.url}>
          <h1>{props.item.title}</h1>
        </a>
      </div>
      <p>{props.item.blurb}</p>
    </div>
  );
};

export default FeedItem;
