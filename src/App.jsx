import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
import router from "./routes/Router";

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
