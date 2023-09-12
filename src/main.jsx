import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="39363341846-qqn8bdqq9a6dt77q0de4ejl18u50rjtr.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
