import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, publishedAt } = props;

  return (
    <div className="my-3">
       <div className="card">
        <img
          src={
            !imgUrl ? `https://cdn0.iconfinder.com/data/icons/controls-and-navigation-arrows-2/24/92-512.png` : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary" style={{ fontSize: "17px", fontWeight: "bolder" }}>
              Author : {!author ? "Unknown" : author} <br />
              Published At : {new Date(publishedAt).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
