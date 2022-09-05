import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { getStoryIds } from "utils/getApi";
import { STORYS_COUNT_PER_PAGE } from "settings/story";
import { Container } from "components/Ui";
import StoryItem from "components/Story/LatestStoryList/StoryItem";
import StoryPagination from "components/Story/LatestStoryList/CustomPagination";
import { Loading, NetworkError, NotFoundError } from "components/State";
import queryOptions from "settings/queryOptions";

function LatestStoryList({ queryKey, activePage }) {
  const params = useParams();
  const { isLoading, isError, data } = useQuery(
    [queryKey],
    () => getStoryIds(queryKey),
    queryOptions
  );

  const indexOfLastStory = activePage * STORYS_COUNT_PER_PAGE;
  const indexOfFirstStory = indexOfLastStory - STORYS_COUNT_PER_PAGE;
  const storyIdsOfCurrentPage =
    data && data.slice(indexOfFirstStory, indexOfLastStory);
  const maximumPageNumber = data && data.length / STORYS_COUNT_PER_PAGE;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NetworkError />;
  }

  if (!(maximumPageNumber + 1 > params.page > 0)) {
    return <NotFoundError />;
  }

  return (
    data && (
      <StoryListBlock>
        <Container>
          <StorySubTitle>Recent</StorySubTitle>
          {storyIdsOfCurrentPage.map((storyId) => (
            <StoryItem key={storyId} storyId={storyId} />
          ))}
          <StoryPagination
            activePage={activePage}
            storysCountPerPage={STORYS_COUNT_PER_PAGE}
            totalStorysCount={data.length}
          />
        </Container>
      </StoryListBlock>
    )
  );
}

export default LatestStoryList;

const StoryListBlock = styled.section`
  display: block;
  margin-top: 20px;
  min-height: 100vh;
`;

const StorySubTitle = styled.h3`
  font-size: 20px;
`;
