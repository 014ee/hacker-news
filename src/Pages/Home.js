import React from 'react';
import TopStoryList from '../Components/TopStory/TopStoryList';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMain from '../Components/Header/HeaderMain';

const HomeTemplate = styled.div``;

const Home = function () {
  const { id } = useParams();
  console.log(id);

  return (
    <HomeTemplate>
      <HeaderMain title='home' />
      <TopStoryList type='top' />
    </HomeTemplate>
  );
};

export default Home;
