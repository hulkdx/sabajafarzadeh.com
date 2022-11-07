import React from 'react';
import PropTypes from 'prop-types';

import './BlogPage.css';

function Blog({ title, content, date }) {
  return (
    <div key={date} className="blog">
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="blog-date">{date}</div>
    </div>
  );
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Blog;
