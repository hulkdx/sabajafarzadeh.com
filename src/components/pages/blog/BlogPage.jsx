import React from 'react';
import Blog from './Blog';
import data from './data';

import './BlogPage.css';

function BlogPage() {
  return (
    <div className="blogs">
      <div className="empty-block" />
      {data.map((d) => Blog(d))}
      <div className="empty-block" />
    </div>
  );
}

export default BlogPage;
