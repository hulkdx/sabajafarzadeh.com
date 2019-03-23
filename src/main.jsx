import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const Main = () => (
  <BrowserRouter>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </BrowserRouter>
);

export default Main;
