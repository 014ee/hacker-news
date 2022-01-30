/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { IconBy, IconTime, IconComment, IconPointOn } from '../../Assets/Icons';
import {
  StoryBlock,
  StoryTitle,
  StoryUrl,
  StoryInfo,
  StoryInfoItem,
  StoryPoint,
} from './Styles';
import { getStory } from '../../Hooks/useApiStory';
import Sitemap from '../../Utils/Sitemap';
import { useDateFormat } from '../../Hooks/useDateFormat';

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

      <StoryInfo>
        <StoryInfoItem>
          <IconBy /> {story.by}
        </StoryInfoItem>
        <StoryInfoItem>
          <IconTime /> {useDateFormat(story.time)} ago
        </StoryInfoItem>
        <StoryInfoItem>
          <IconComment /> {story.descendants}
        </StoryInfoItem>
      </StoryInfo>

      <StoryPoint>
        <IconPointOn />
        {story.score}
        <progress max='300' value={story.score}></progress>
      </StoryPoint>
    </StoryBlock>
  ) : null;
}

export default Story;
