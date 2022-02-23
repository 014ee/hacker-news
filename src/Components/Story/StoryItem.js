/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getStory } from '../../Hooks/useApi';
import Sitemap from '../../Utils/Sitemap';
import { IconPointOn } from '../../Assets/Icons';
import { StoryInfo } from './StoryInfo';

function StoryItem({ storyId, currentPosts }) {
  const [story, setStory] = useState([]);
  const [domain, setDomain] = useState('');

  useEffect(() => {
    getStory(storyId)
      .then((data) => {
        data && setStory(data);
        return data.url;
      })
      .then((url) => {
        url &&
          setDomain(
            url.match(/(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi)
          );
      });
    return () => {
      setStory([]);
      setDomain([]);
    };
  }, [currentPosts, storyId]);

  return story ? (
    <StoryItemBlock>
      {story.url && <span className='url'> {domain}</span>}

      <h2 className='title'>
        {story.url ? (
          <a href={story.url} target='_blank' rel='noreferrer'>
            {story.title}
          </a>
        ) : (
          <Link to={`${Sitemap.detail.path}${story.id}`}>{story.title}</Link>
        )}
      </h2>

      <div className='pointbar'>
        <span>
          <IconPointOn />
          {story.score && story.score}
        </span>
        <PointBar
          max='300'
          min='0'
          low='299'
          height='300'
          optimum='300'
          value={story.score}
        />
      </div>

      <StoryInfo
        id={story.id}
        by={story.by}
        time={story.time}
        kids={story.kids}
      />
    </StoryItemBlock>
  ) : null;
}

export default StoryItem;

const StoryItemBlock = styled.article`
  display: block;
  margin-top: 12px;
  padding: 12px 0;

  & span.url {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 60%;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 1em;
    font-weight: 200;
    white-space: nowrap;
  }

  & h2.title {
    font-size: 16px;
    letter-spacing: 0.04em;
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
`;

const PointBar = styled.meter`
  flex-grow: 1;
  height: 3px;
  border: 0;
  background: ${(props) => props.theme.gray};
  border-radius: 3px;

  ::-webkit-meter-bar {
    height: 3px;
    border: 0;
    background: ${(props) => props.theme.gray};
    border-radius: 3px;
  }
  ::-webkit-meter-suboptimum-value {
    background: ${(props) => props.theme.pointColor};
  }
  ::-webkit-meter-optimum-value {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }

  :-moz-meter-sub-optimum::-moz-meter-bar {
    background: ${(props) => props.theme.pointColor};
  }
  :-moz-meter-optimum::-moz-meter-bar {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }
`;
