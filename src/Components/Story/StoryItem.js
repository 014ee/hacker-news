/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { IconPointOn } from '../../Assets/Icons';
import { StoryInfoBlock } from './StoryInfo';
import {
  StoryBlock,
  StoryTitle,
  StoryUrl,
  StoryPoint,
  PointBar,
} from './Styles';
import { getStory } from '../../Hooks/useApi';
import Sitemap from '../../Utils/Sitemap';

function Story({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, [storyId]);

  return story ? (
    <StoryBlock>
      <StoryUrl>{story.url}</StoryUrl>
      <StoryTitle>
        {story.url ? (
          <a href={story.url} target='_blank'>
            {story.title}
          </a>
        ) : (
          <a href={`${Sitemap.detail.path}${story.id}`}>{story.title}</a>
        )}
      </StoryTitle>

      <StoryInfoBlock
        id={story.id}
        by={story.by}
        time={story.time}
        kids={story.kids}
      />

      <StoryPoint>
        <IconPointOn />
        {story.score}
        <PointBar max='300' value={story.score} />
      </StoryPoint>
    </StoryBlock>
  ) : null;
}

PointBar.defaultProps = {
  value: 0,
};

export default Story;
