/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { IconBy, IconTime, IconComment, IconPointOn } from '../../Assets/Icons';
import {
  StoryBlock,
  StoryIndex,
  StoryTitle,
  StoryUrl,
  StoryInfo,
  StoryInfoItem,
  StoryPoint,
  Button,
} from './Styles';
import { getStory } from '../../Hooks/useApiStory';
import { useDateFormat } from '../../Hooks/useDateFormat';

function Story({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, [storyId]);

  return story ? (
    <StoryBlock>
      <Container>
        <StoryIndex>{index + 1}</StoryIndex>
        <StoryTitle>
          <a href={story.url} target='_blank'>
            {story.title}
          </a>
        </StoryTitle>
        <StoryUrl>{story.url}</StoryUrl>
        <StoryInfo>
          <StoryInfoItem>
            <Button>
              <IconBy /> {story.by}
            </Button>
          </StoryInfoItem>
          <StoryInfoItem>
            <Button>
              <IconTime />
              {useDateFormat(story.time)} ago
            </Button>
          </StoryInfoItem>
          <StoryInfoItem>
            <Button>
              <IconComment /> {story.descendants}
            </Button>
          </StoryInfoItem>
        </StoryInfo>

        <StoryPoint>
          <IconPointOn />
          <span>{story.score}</span>
          <progress max='300' value={story.score}></progress>
        </StoryPoint>
      </Container>
    </StoryBlock>
  ) : null;
}

export default Story;
