import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider, store } from "./redux/redux";
import HomePage from "./pages/HomePage";
import "semantic-ui-css/semantic.min.css";

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="ui container">
        <Route path="/" exact component={HomePage} />
      </div>
    </Provider>
  </BrowserRouter>
);

export default Main;
