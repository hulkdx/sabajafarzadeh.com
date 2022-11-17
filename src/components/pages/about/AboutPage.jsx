/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import AboutIcons from './AboutIcons';

import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-content">
      <div className="about">
        <div className="header">Hi my name is</div>
        <h1>Saba Jafarzadeh</h1>
        I'm a software developer based in Helsinki
        <br />
        Specializing in building Android apps, and working in Nordea
        <br />
        <p className="about-main-content">
          Currently I'm working in
          {' '}
          <a href="https://github.com/hulkdx/FindProfessional">Find Professional</a>
          {' '}
          hobby project in my free time.
        </p>
      </div>
      <AboutIcons name="ant-design:github-filled" />
    </div>
  );
}

export default AboutPage;
