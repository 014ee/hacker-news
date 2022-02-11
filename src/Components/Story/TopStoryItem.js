/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getStory } from '../../Hooks/useApi';
import { Container } from '../Container';
import { StoryInfo } from './StoryInfo';
import { IconPointOn } from '../../Assets/Icons';

function TopStoryItem({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
    return () => {
      setStory([]);
    };
  }, [storyId]);

  return story ? (
    <StoryItemBlock>
      <Container>
        <StoryIndex>{index + 1}</StoryIndex>
        <h2>
          <a href={story.url} target='_blank' rel='noreferrer'>
            {story.title}
          </a>
        </h2>
        <span className='url'>{story.url}</span>

        <StoryInfo
          id={story.id}
          by={story.by}
          time={story.time}
          kids={story.kids}
        />

        <div className='pointbar'>
          <span>
            <IconPointOn />
            {story.score}
          </span>
          <PointBar max='300' min='0' value={story.score} />
        </div>
      </Container>
    </StoryItemBlock>
  ) : null;
}

export default TopStoryItem;

const StoryItemBlock = styled.article`
  display:block;
  padding: 12px 0;
  margin: 12px 0;
  background: ${(props) => props.theme.cardBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  & > div{
    max-width: 80%;
  }
  & h2 {
    font-size: 16px;
    letter-spacing: 0.04em;
  }
  & span.url {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  }

  & div.pointbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      svg {
        margin-right: 4px;
      }
    }
  }

}
`;

const StoryIndex = styled.span`
  position: absolute;
  left: -16px;
  display: inline-block;
`;

const PointBar = styled.progress`
  flex-grow: 1;
  height: 3px;
  color: orange;
  & ::-webkit-progress-bar {
    background: red;
  }
  &[value]::-webkit-progress-value {
    background: orange;
  }
`;
