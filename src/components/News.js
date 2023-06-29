import React from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0cfb6ea5c0dd4165a90ebbd76a6fa7b7&page=${page}&pageSize=${props.pageSize}`
    ).then((res) => res.json());
    props.setProgress(50);
    setArticles(data.articles);
    setLoading(false);

    setTotalResults(data.totalResults);

    props.setProgress(100);
    document.title = `News App - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
  };

  useEffect(() => {
    updateNews();
  }, [page]);
  const handlePrev = async () => {
    setPage(page - 1);
    updateNews();
  };
  const handleNext = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h2>
      {loading && <Loading />}

      <div className="row ">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" onClick={handlePrev} className="btn btn-primary">
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > totalResults / props.pageSize}
          type="button"
          onClick={handleNext}
          className="btn btn-primary"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
