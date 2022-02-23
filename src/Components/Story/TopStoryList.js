import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getStoryIds } from '../../Hooks/useApi';
import { Container } from '../Container';
import TopStoryItem from './TopStoryItem';
import { IconBadge, IconTime } from '../../Assets/Icons';

function TopStoryList({ title, type }) {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds(type).then((data) => data && setStoryIds(data));
  }, [type]);

  return (
    <>
      <StoryDate>
        <strong>{title}</strong>
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
        <TopStoryItem key={storyId} storyId={storyId} index={index} />
      ))}
    </>
  );
}

export default TopStoryList;

const StoryDate = styled.header`
  padding: 12px 0 4px;
  background: #232429;
  font-size: 16px;
  font-weight: 800;
  text-align: center;

  & > div {
    display: flex;
    margin-top: 8px;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0;

    & > span {
      display: flex;
      justify-content: start;
      align-items: center;
      & > svg {
        margin-right: 6px;
      }
    }

    & > span:first-child {
      flex-grow: 1;
      text-align: left;
    }
  }
`;
