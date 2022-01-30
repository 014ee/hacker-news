import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { StoryListBlock, StorySubTitle } from './Styles';
import { getStoryIds } from '../../Hooks/useApiStory';
import StoryItem from './StoryItem';

function StoryList({ type }) {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds(type).then((data) => data && setStoryIds(data));
  }, []);

  return (
    <StoryListBlock>
      <Container>
        <StorySubTitle>Recent</StorySubTitle>
        {storyIds.slice(0, 10).map((storyId, index) => (
          <StoryItem key={storyId} storyId={storyId} index={index} />
        ))}
      </Container>
    </StoryListBlock>
  );
}

export default StoryList;
