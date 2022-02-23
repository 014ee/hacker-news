import React from 'react';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';
import Sitemap from '../Utils/Sitemap';

const Ask = function () {
  return (
    <>
      <HeaderSub title={Sitemap.ask.name} />
      <StoryList type='ask' />
    </>
  );
};

export default Ask;
