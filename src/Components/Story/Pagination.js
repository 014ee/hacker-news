import React from 'react';
import { PageList, PageItem, PageNumber } from './Styles';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PageList>
      {pageNumbers.map((number) => (
        <PageItem key={number}>
          <PageNumber onClick={() => paginate(number)}>{number}</PageNumber>
        </PageItem>
      ))}
    </PageList>
  );
};

export default Pagination;
