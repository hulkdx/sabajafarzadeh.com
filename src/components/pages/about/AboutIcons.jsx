/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';

import './AboutPage.css';

function IC({ className, icon, href }) {
  return (
    <a href={href}>
      <Icon className={`about-icon ${className}`} icon={icon} />
    </a>
  );
}

function GitHub() {
  return (
    <IC className="github-icon" icon="ant-design:github-filled" href="https://github.com/hulkdx" />
  );
}

function Linkedin() {
  return (
    <IC
      className="linkedin-icon"
      icon="akar-icons:linkedin-box-fill"
      href="https://www.linkedin.com/in/saba-jafarzadeh"
    />
  );
}

function Stackoverflow() {
  return (
    <IC
      className="stackoverflow-icon"
      icon="simple-icons:stackoverflow"
      href="https://stackoverflow.com/users/3996989/saba"
    />
  );
}

function AboutIcons() {
  return (
    <div className="about-icons">
      <GitHub />
      <Linkedin />
      <Stackoverflow />
    </div>
  );
}

export default AboutIcons;
