import React from 'react';
import Blog from './Blog';
import data from './data';

import './BlogPage.css';

function BlogPage() {
  return <div className="blogs">{data.map((d) => Blog(d))}</div>;
}

export default BlogPage;
