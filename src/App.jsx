import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";

import Blog from "./components/Blog";
import DetailsPage from "./components/DetailsPage";
import { AuthProvider } from "./AppContext";
import PageLayout from "./PageLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      // errorElement: <SignIn />,
      children: [
        {
          path: "/",
          element: <Blog />,
        },
        {
          path: "/:category",
          element: <DetailsPage />,
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
