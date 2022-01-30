import React from 'react';
import { useParams } from 'react-router-dom';
import Sitemap from '../Utils/Sitemap';
import styled from 'styled-components';
import HeaderSub from '../Components/Header/HeaderSub';
import StoryList from '../Components/Story/StoryList';

const JobsTemplate = styled.div``;

const Jobs = function () {
  const { id } = useParams();
  console.log(id);

  return (
    <JobsTemplate>
      <HeaderSub title='jobs' />
      <StoryList type='job' />
      Jobs 페이지 입니다.
      <p>
        <a href={Sitemap.detail.path}>게시물이 있다고 치자</a>
      </p>
    </JobsTemplate>
  );
};

export default Jobs;
