import React from 'react';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';
import Sitemap from '../Utils/Sitemap';

const Show = function () {
  return (
    <>
      <HeaderSub title={Sitemap.show.name} />
      <StoryList type='show' />
    </>
  );
};

export default Show;
