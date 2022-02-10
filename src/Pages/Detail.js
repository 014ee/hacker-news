import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetail from '../Components/Header/HeaderDetail';
import DetailStory from '../Components/Story/DetailStory';

const Detail = function ({ title }) {
  const { id } = useParams();

  return (
    <>
      <HeaderDetail
        title={true ? (title = '기사보기') : (title = 'Comments')}
      />
      <DetailStory id={id} />
    </>
  );
};

export default Detail;
