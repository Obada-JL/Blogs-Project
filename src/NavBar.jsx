import { Link, useParams } from "react-router-dom";
import HeaderLogo from "./components/imgs/Header-Logo.svg";
import SearchLogo from "./components/imgs/search-outline.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AppContext";
function NavBar() {
  const { category } = useParams();
  const { Blogs } = useContext(AuthContext);
  let currentBlog;
  Blogs.forEach((Blog) => {
    if (Blog.category === category) {
      currentBlog = Blog.category;
    } else if (category === undefined) {
      currentBlog = "Home";
    } else {
    }
  });
  const SearchBlog = (e) => {
    const BlogsContainer =
      e.target.closest(".NavContainer").nextSibling.children[0];
    for (let i = 0; i < BlogsContainer.children.length; i++) {
      let BlogCategory = BlogsContainer.children[i].id.toLowerCase();
      if (!BlogCategory.includes(e.target.value)) {
        BlogsContainer.children[i].style.display = "none";
      } else {
        BlogsContainer.children[i].style.display = "block";
      }
    }
  };
  const [screen, setScreen] = useState(
    <div className="NavBar">
      <Link to={"/"}>
        <img src={HeaderLogo} />
      </Link>
      <h3>{currentBlog}</h3>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          className="searchInput"
          onChange={SearchBlog}
        />
        <img src={SearchLogo} style={{ scale: "120%" }} />
      </div>
    </div>
  );
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setScreen(
        <div className="NavBar d-block">
          <div className="d-flex justify-content-around">
            <Link to={"/"}>
              <img src={HeaderLogo} />
            </Link>
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search"
                className="searchInput"
                onChange={SearchBlog}
              />
              <img src={SearchLogo} style={{ scale: "120%" }} />
            </div>
          </div>
          <h3 className="d-flex justify-content-center mt-1">{currentBlog}</h3>;
        </div>
      );
    } else {
      setScreen(
        <div className="NavBar">
          <Link to={"/"}>
            <img src={HeaderLogo} />
          </Link>
          <h3>{currentBlog}</h3>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search"
              className="searchInput"
              onChange={SearchBlog}
            />
            <img src={SearchLogo} style={{ scale: "120%" }} />
          </div>
        </div>
      );
    }
  }, [category]);

  return (
    <>
      <div className="NavContainer pt-3 pb-5 mb-3">{screen}</div>
    </>
  );
}
export default NavBar;
