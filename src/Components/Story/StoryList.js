import React, { useState, useEffect } from 'react';

import { getStoryIds } from '../../Hooks/useApi';
import { Container } from '../Container';
import StoryItem from './StoryItem';
import Pagination from './Pagination';
import { StoryListBlock, StorySubTitle } from './Styles';

function StoryList({ type }) {
  const [storyIds, setStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getStoryIds(type).then((data) => data && setStoryIds(data));
    return () => setStoryIds([]);
  }, [type]);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = storyIds.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StoryListBlock>
      <Container>
        <StorySubTitle>Recent</StorySubTitle>
        {currentPosts.length === postsPerPage &&
          currentPosts.map((storyId) => (
            <StoryItem
              key={storyId}
              storyId={storyId}
              currentPosts={currentPosts}
            />
          ))}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={storyIds.length}
          paginate={paginate}
        />
      </Container>
    </StoryListBlock>
  );
}

export default StoryList;
