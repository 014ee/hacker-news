import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { getStory } from "utils/getApi";
import { Container } from "components/Ui";
import { Loading, NetworkError } from "components/State";
import InfoSet from "../InfoSet";
import { NotFoundError } from "components/State";
import queryOptions from "settings/queryOptions";
import LazyComponent from "components/Ui/LazyComponent";
import CommentItem from "../CommentItem";

function DetailStory() {
  const params = useParams();
  const { isLoading, isError, data } = useQuery(
    [params.id],
    () => getStory(params.id),
    queryOptions
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NetworkError />;
  }

  if (!data) {
    return <NotFoundError redirection={"/"} />;
  }

  return (
    <DetailStoryBlock>
      <Article>
        <Container>
          <h2>{data.title}</h2>
          <InfoSet
            id={data.id}
            by={data.by}
            created={data.created}
            kids={data.kids}
          />
          {data.text && <p dangerouslySetInnerHTML={{ __html: data.text }}></p>}
        </Container>
      </Article>
      <StoryComment>
        {data.kids &&
          data.kids.map((id, index) => (
            <LazyComponent key={index}>
              <CommentItem id={id} />
            </LazyComponent>
          ))}
      </StoryComment>
    </DetailStoryBlock>
  );
}

export default React.memo(DetailStory);

const DetailStoryBlock = styled.main`
  padding: 20px 0;
  article {
    padding: 20px 0;
    h2 {
      font-size: 20px;
      letter-spacing: 0.04em;
      line-height: 1.4em;
    }
    p {
      padding: 20px 0;
    }
  }
`;

const Article = styled.article``;
const StoryComment = styled.div``;
