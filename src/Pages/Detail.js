import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetail from '../Components/Header/HeaderDetail';
import DetailStory from '../Components/DetailStory/DetailStory';

const Detail = function () {
  const { id } = useParams();

  return (
    <>
      <HeaderDetail title='페이지 제목' />
      <DetailStory id={id} />
    </>
  );
};

export default Detail;
