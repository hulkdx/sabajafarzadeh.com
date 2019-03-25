import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider, store } from "./redux/redux";

import "./main.css";

import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";

import NavBar from "./components/common/NavBar";

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Provider>
  </BrowserRouter>
);

export default Main;
