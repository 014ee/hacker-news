import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { getStory } from '../../Hooks/useApi';
import { Container } from '../Container';
import { StoryInfo } from './StoryInfo';
import CommentItem from './CommentItem';

function DetailStory({ id }) {
  const [story, setStory] = useState([]);
  const [kidIds, setKidIds] = useState([]);

  useEffect(() => {
    getStory(id)
      .then((data) => {
        data && setStory(data);
        return data.kids;
      })
      .then((kids) => kids && setKidIds(story.kids));
  }, [id, story.kids]);

  return (
    <DetailStoryBlock>
      <article>
        <Container>
          <h2>{story.title}</h2>
          <StoryInfo
            id={story.id}
            by={story.by}
            time={story.time}
            kids={story.kids}
          />
          <p>{story.text}</p>
        </Container>
      </article>

      <StoryComment>
        {kidIds &&
          kidIds.map((kidId, index) => (
            <CommentItem key={kidId} kidId={kidId} index={index} />
          ))}
      </StoryComment>
    </DetailStoryBlock>
  );
}

export default DetailStory;

const DetailStoryBlock = styled.div`
  padding: 20px 0;
  article {
    padding: 20px 0;
    h2 {
      font-size: 20px;
      letter-spacing: 0.04em;
      line-height: 1.4em;
    }
    p {
      padding: 20px 0;
    }
  }
`;

const StoryComment = styled.div`
  & > section {
    padding: 20px 0;
    background: ${(props) => props.theme.subBgColor};
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  & > section::nth-child(even) {
    background: ${(props) => props.theme.gray};
  }
`;
