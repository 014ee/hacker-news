import React from 'react';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';
import Sitemap from '../Utils/Sitemap';

const Article = function () {
  return (
    <>
      <HeaderSub title={Sitemap.article.name} />
      <StoryList type='new' />
    </>
  );
};

export default Article;
