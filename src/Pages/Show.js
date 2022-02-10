import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';
import Sitemap from '../Utils/Sitemap';

const Show = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title={Sitemap.show.name} />
      <StoryList type='show' />
    </>
  );
};

export default Show;
