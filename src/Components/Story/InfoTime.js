import React from 'react';
import { StoryInfoItem } from './Styles';
import { IconTime } from '../../Assets/Icons';
import { useDateFormat } from '../../Hooks/useDateFormat';

const InfoTime = ({ time }) => {
  return (
    <StoryInfoItem>
      <IconTime /> {useDateFormat(time)} ago
    </StoryInfoItem>
  );
};

export default InfoTime;
