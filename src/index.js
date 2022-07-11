import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./v3/App";
import items from "./components_v0.2/data/data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App index={0} />);
