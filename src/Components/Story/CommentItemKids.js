import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getStory } from '../../Hooks/useApi';
import { useDateFormat } from '../../Hooks/useDateFormat';

const CommentItemKids = ({ kidId }) => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getStory(kidId).then((data) => setComment(data));
  });
  return (
    <CommentItemKidsBlock>
      <div>
        <strong>{comment.by} </strong>
        <span>{useDateFormat(comment.time)}</span>
      </div>
      <p>{comment.text}</p>
    </CommentItemKidsBlock>
  );
};

export default CommentItemKids;

const CommentItemKidsBlock = styled.section`
  margin-top: 20px;
  padding: 20px 20px;
  border-top: 1px solid ${(props) => props.theme.gray};

  & > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    ::before {
      content: '└';
      position: absolute;
      left: -20px;
      top: 0;
      opacity: ${(props) => props.theme.halfOpacity};
    }
    & > strong {
      display: block;
      color: ${(props) => props.theme.pointColor};
    }
    & > span {
      opacity: ${(props) => props.theme.halfOpacity};
    }
  }
  & > p {
    padding: 4px 0;
  }
`;
