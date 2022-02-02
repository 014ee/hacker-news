import React, { useState, useEffect } from 'react';
import { getStory } from '../../Hooks/useApi';
import { Container } from '../Container';
import {
  DetailStoryBlock,
  StoryHeader,
  StoryTitle,
  StoryText,
  StoryComment,
  Comment,
} from './Styles';

function DetailStory({ id }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(id).then((data) => data && setStory(data));
  }, []);

  return (
    <DetailStoryBlock>
      <Container>
        <StoryHeader>
          <StoryTitle>
            {story.title} <p>세부내용</p>
          </StoryTitle>
        </StoryHeader>
        <StoryText>{story.text}</StoryText>
      </Container>
      <StoryComment>
        <Comment>
          <Container>코멘트 섹션</Container>
        </Comment>
      </StoryComment>
    </DetailStoryBlock>
  );
}

export default DetailStory;
