import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const ShowTemplate = styled.div``;

const Show = function () {
  const { id } = useParams();
  console.log(id);

  return (
    <ShowTemplate>
      <HeaderSub title='show' />
      <StoryList type='show' />
      Show 페이지 입니다.
    </ShowTemplate>
  );
};

export default Show;
