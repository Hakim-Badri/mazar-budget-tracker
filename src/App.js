import { useState, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Paperbase from "./components/Paperbase";
const App = () => {
  return (
    <div>
      <Paperbase />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
