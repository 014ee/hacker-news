import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const Show = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title='show' />
      <StoryList type='show' />
    </>
  );
};

export default Show;
