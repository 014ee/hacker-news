import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const ArticleTemplate = styled.div``;

const Article = function () {
  const { id } = useParams();
  console.log(id);

  return (
    <ArticleTemplate>
      <HeaderSub title='article' />
      <StoryList type='new' />
    </ArticleTemplate>
  );
};

export default Article;
