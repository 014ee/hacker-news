import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderDetail from '../Components/Header/HeaderDetail';
import DetailStory from '../Components/DetailStory/DetailStory';

const DetailTemplate = styled.div``;

const Detail = function () {
  const { id } = useParams();

  return (
    <DetailTemplate>
      <HeaderDetail title='페이지 제목' />
      <DetailStory id={id} />
    </DetailTemplate>
  );
};

export default Detail;
