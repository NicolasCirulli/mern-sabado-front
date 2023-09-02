import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <Event />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:idCategory",
        element: <Category />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
