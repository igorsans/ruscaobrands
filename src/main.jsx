import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./assets/Routes/Routes.jsx";
import LangProvider from "./Context/LangProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <Routes />
    </LangProvider>
  </React.StrictMode>
);
