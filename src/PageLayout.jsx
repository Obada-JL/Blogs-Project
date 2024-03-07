import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function PageLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default PageLayout;
