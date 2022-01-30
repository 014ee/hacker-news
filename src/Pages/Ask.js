import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const AskTemplate = styled.div``;

const Ask = function () {
  const { id } = useParams();
  console.log(id);

  return (
    <AskTemplate>
      <HeaderSub title='ask' />
      <StoryList type='ask' />
    </AskTemplate>
  );
};

export default Ask;
