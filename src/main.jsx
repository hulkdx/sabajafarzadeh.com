import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, store } from './redux/redux';

import './main.css';

import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/about/AboutPage';

import NavBar from './components/common/Navbar/Navbar';

function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <NavBar />
          <div className="container-main">
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default Main;
