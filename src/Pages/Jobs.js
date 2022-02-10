import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';
import Sitemap from '../Utils/Sitemap';

const Jobs = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderSub title={Sitemap.jobs.name} />
      <StoryList type='job' />
    </>
  );
};

export default Jobs;
