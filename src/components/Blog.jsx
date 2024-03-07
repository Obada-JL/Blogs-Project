import "./Blog.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AppContext";
function Blog() {
  const navigate = useNavigate();
  const handleDetailPage = (e) => {
    navigate(`/${e.currentTarget.id}`);
    window.location.reload();
  };
  const { Blogs } = useContext(AuthContext);
  const [BlogsContent, setBlogsContent] = useState([]);
  useEffect(() => {
    for (let i = 0; i < Blogs.length; i++) {
      setBlogsContent((prevContent) => [
        ...prevContent,
        <div
          id={Blogs[i].category}
          className="BlogContainer p-3 border border-2"
          onClick={handleDetailPage}
          style={{ cursor: "pointer" }}
        >
          <div className="imgSection">
            <img src={Blogs[i].img} />
          </div>
          <div className="TextSection">
            <div
              className="text-primary m-1 mt-2 p-2 d-inline-block rounded h6"
              style={{ background: "rgba(75, 107, 251, 0.2)" }}
            >
              {Blogs[i].category}
            </div>
            <div className="h5 p-1">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </div>
            <div className="d-flex gap-3 align-items-center h6 text-secondary">
              <img src={Blogs[i].person} />
              <div>{Blogs[i].name}</div>
              <div>August 20,2022</div>
            </div>
          </div>
        </div>,
      ]);
    }
  }, [Blogs.length === BlogsContent.length]);
  const loadMore = () => {
    const randomBlog = Math.floor(Math.random() * Blogs.length);
    for (let i = 0; i < 10; i++) {
      setBlogsContent((prevContent) => [
        ...prevContent,
        <div
          id={Blogs[randomBlog].category}
          className="BlogContainer p-3 border border-2"
          onClick={handleDetailPage}
          style={{ cursor: "pointer" }}
        >
          <div className="imgSection">
            <img src={Blogs[randomBlog].img} />
          </div>
          <div className="TextSection">
            <div
              className="text-primary m-1 mt-2 p-2 d-inline-block rounded h6"
              style={{ background: "rgba(75, 107, 251, 0.2)" }}
            >
              {Blogs[randomBlog].category}
            </div>
            <div className="h5 p-1">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </div>
            <div className="d-flex gap-3 align-items-center h6 text-secondary">
              <img src={Blogs[randomBlog].person} />
              <div>{Blogs[randomBlog].name}</div>
              <div>August 20,2022</div>
            </div>
          </div>
        </div>,
      ]);
    }

    // return Blogs[randomIndex];
  };
  return (
    <>
      <div
        className="d-flex gap-3 justify-content-center"
        style={{ flexWrap: "wrap" }}
      >
        {BlogsContent.slice(0, BlogsContent.length / 2)}
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-light mb-5 mt-3 p-2 border border-2"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </>
  );
}
export default Blog;
