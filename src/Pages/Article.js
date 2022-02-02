import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const Article = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title='article' />
      <StoryList type='new' />
    </>
  );
};

export default Article;
