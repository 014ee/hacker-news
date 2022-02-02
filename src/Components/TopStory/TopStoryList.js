import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { IconBadge, IconTime } from '../../Assets/Icons';
import { SliderBlock, StoryListBlock, StoryDate } from './Styles';
import { getStoryIds } from '../../Hooks/useApi';
import StoryItem from './TopStoryItem';

function StoryList({ type }) {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds(type).then((data) => data && setStoryIds(data));
  }, []);

  return (
    <SliderBlock>
      <StoryListBlock>
        <StoryDate>
          2022/1/25(화)
          <Container>
            <span>
              <IconBadge />
              랭킹 1~5위 기사
            </span>
            <span>
              <IconTime />
              매일 6시 업데이트
            </span>
          </Container>
        </StoryDate>
        {storyIds.slice(0, 5).map((storyId, index) => (
          <StoryItem key={storyId} storyId={storyId} index={index} />
        ))}
      </StoryListBlock>
    </SliderBlock>
  );
}

export default StoryList;
