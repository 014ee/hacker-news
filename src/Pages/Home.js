import React from 'react';
import HeaderMain from '../Components/Header/HeaderMain';
import TopStoryList from '../Components/TopStory/TopStoryList';

const Home = function () {
  return (
    <>
      <HeaderMain title='home' />
      <TopStoryList type='top' />
    </>
  );
};

export default Home;
