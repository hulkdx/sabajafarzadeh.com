import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, store } from './redux/redux';

import './main.css';

import BlogPage from './components/pages/blog/BlogPage';
import AboutPage from './components/pages/about/AboutPage';
import FindProfessionalPage from './components/pages/findprofessional/FindProfessionalPage';

import NavBar from './components/common/Navbar/Navbar';

function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <NavBar />
          <div className="container-main">
            <Route path="/" exact component={BlogPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/ff" component={FindProfessionalPage} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default Main;
