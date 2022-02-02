import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { StoryListBlock, StorySubTitle } from './Styles';
import { getStoryIds } from '../../Hooks/useApi';
import StoryItem from './StoryItem';
import Pagination from './Pagination';

function StoryList({ type }) {
  const [storyIds, setStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getStoryIds(type).then((data) => data && setStoryIds(data));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = storyIds.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StoryListBlock>
      <Container>
        <StorySubTitle>Recent</StorySubTitle>
        {currentPosts.map((storyId, index) => (
          <StoryItem key={storyId} storyId={storyId} index={index} />
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
