import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const Jobs = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title='jobs' />
      <StoryList type='job' />
    </>
  );
};

export default Jobs;
