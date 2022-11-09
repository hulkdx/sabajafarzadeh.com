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
        Specializing in building Android apps, and currently I'm working in Nordea
        <br />
        <div className="about-main-content">
          Hobby Projects:
          <ul>
            <li>
              <h4>
                <a href="https://github.com/hulkdx/FindProfessional">Find Professional</a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
      <AboutIcons name="ant-design:github-filled" />
    </div>
  );
}

export default AboutPage;
