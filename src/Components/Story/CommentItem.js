import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDateFormat } from '../../Hooks/useDateFormat';
import { getStory } from '../../Hooks/useApi';
import { Container } from '../Container';
import CommentItemKids from './CommentItemKids';

const CommentItem = ({ kidId }) => {
  const [comment, setComment] = useState([]);
  const [kidIds, setKidIds] = useState([]);

  useEffect(() => {
    getStory(kidId)
      .then((data) => setComment(data))
      .then(() => setKidIds(comment.kids));
  });

  return (
    <CommentItemBlock>
      <Container>
        <details open>
          <summary>
            <strong>{comment.by} </strong>
            <span>{useDateFormat(comment.time)}</span>
          </summary>
          <p>{comment.text}</p>
          {kidIds &&
            kidIds.map((kidId, index) => (
              <CommentItemKids key={kidId} kidId={kidId} index={index} />
            ))}
        </details>
      </Container>
    </CommentItemBlock>
  );
};

export default CommentItem;

const CommentItemBlock = styled.section`
  details {
    cursor: pointer;

    & > summary {
      display: flex;
      justify-content: space-between;
      & > strong {
        font-size: 16px;
        color: ${(props) => props.theme.pointColor};
      }
      & > span {
        opacity: ${(props) => props.theme.halfOpacity};
      }
    }
    & > p {
      padding: 4px 0;
    }
  }
`;
