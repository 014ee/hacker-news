import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const Ask = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title='ask' />
      <StoryList type='ask' />
    </>
  );
};

export default Ask;
