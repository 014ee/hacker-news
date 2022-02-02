import React from 'react';
import { Link } from 'react-router-dom';
import Sitemap from '../Utils/Sitemap';

const NotFound = function () {
  return (
    <>
      <h2>PAGE NOT FOUND</h2>
      <p>Sorry, that page cant't be found.</p>
      <Link to={Sitemap.home.path}>Go to Home</Link>
    </>
  );
};

export default NotFound;
