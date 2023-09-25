import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
import router from "./routes/Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastAlerts from "./utils/alerts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken()).then((res) => {
        if (res.payload.user) toastAlerts.success(res.payload.user.name);
      });
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}

export default App;
