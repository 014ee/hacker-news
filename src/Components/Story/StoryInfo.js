import React from 'react';
import { StoryInfo } from './Styles';
import InfoBy from './InfoBy';
import InfoComment from './InfoComment';
import InfoTime from './InfoTime';

export const StoryInfoBlock = ({ id, by, time, kids }) => {
  return (
    <StoryInfo>
      <InfoBy by={by} />
      <InfoTime time={time} />
      <InfoComment kids={kids} id={id} />
    </StoryInfo>
  );
};
