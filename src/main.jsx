import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "semantic-ui-css/semantic.min.css";

const Main = () => (
  <BrowserRouter>
    <div className="ui container">
      <Route path="/" exact component={HomePage} />
    </div>
  </BrowserRouter>
);

export default Main;
