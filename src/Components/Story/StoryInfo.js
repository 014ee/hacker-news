import React from 'react';
import styled from 'styled-components';

import InfoBy from './InfoBy';
import InfoComment from './InfoComment';
import InfoTime from './InfoTime';

export const StoryInfo = ({ id, by, time, kids }) => {
  return (
    <StoryInfoBlock>
      <li>{by && <InfoBy by={by} />}</li>
      <li>{time && <InfoTime time={time} />}</li>
      {kids && (
        <li>
          <InfoComment kids={kids} id={id} />
        </li>
      )}
    </StoryInfoBlock>
  );
};

StoryInfo.defaultProps = {
  kids: [],
};

const StoryInfoBlock = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 8px;
  opacity: ${(props) => props.theme.halfOpacity};
  & li {
    font-size: 12px;
    line-height: 1em;
    & + * {
      margin-left: 12px;
    }
    svg {
      margin-right: 4px;
      vertical-align: bottom;
    }
  }
`;
