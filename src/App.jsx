import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
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
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
