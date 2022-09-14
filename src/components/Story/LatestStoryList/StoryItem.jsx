import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import sitemap from "settings/sitemap";
import { getStory } from "utils/getApi";
import { IconPointOn } from "assets/icons";
import InfoSet from "../InfoSet";
import StoryItemSkeleton from "./StoryItem.Skeleton";
import { POINTBAR_MAX_NUM } from "settings/story";
import { getOnlyDomainName } from "utils/regExp";

function StoryItem({ storyId }) {
  const { isLoading, isError, data } = useQuery([storyId], () =>
    getStory(storyId)
  );

  if (isLoading) {
    return <StoryItemSkeleton />;
  }

  if (isError) {
    return;
  }

  return (
    data && (
      <StoryItemBlock>
        {data.url ? (
          <>
            <span className="url">{data.url.match(getOnlyDomainName)}</span>
            <h2 className="title">
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.title}
              </a>
            </h2>
          </>
        ) : (
          <h2 className="title">
            <Link to={`${sitemap.detail.path}${data.id}`}>{data.title}</Link>
          </h2>
        )}

        <div className="pointbar">
          <span>
            <IconPointOn />
            {data.score && data.score}
          </span>
          <PointBar
            max={POINTBAR_MAX_NUM}
            min="0"
            low="299"
            high={POINTBAR_MAX_NUM}
            optimum={POINTBAR_MAX_NUM}
            value={data.score}
          />
        </div>

        <InfoSet
          id={data.id}
          by={data.by}
          created={data.created}
          comments={data.comments}
        />
      </StoryItemBlock>
    )
  );
}

export default React.memo(StoryItem);

const StoryItemBlock = styled.article`
  display: block;
  margin-top: 12px;
  padding: 12px 0;

  & span.url {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 60%;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 1em;
    font-weight: 200;
    white-space: nowrap;
  }

  & h2.title {
    font-size: 16px;
    letter-spacing: 0.04em;
  }

  & div.pointbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      svg {
        margin-right: 4px;
      }
    }
  }
`;

const PointBar = styled.meter`
  flex-grow: 1;
  height: 3px;
  border: 0;
  background: ${(props) => props.theme.gray};
  border-radius: 3px;

  ::-webkit-meter-bar {
    height: 3px;
    border: 0;
    background: ${(props) => props.theme.gray};
    border-radius: 3px;
  }
  ::-webkit-meter-suboptimum-value {
    background: ${(props) => props.theme.pointColor};
  }
  ::-webkit-meter-optimum-value {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }

  :-moz-meter-sub-optimum::-moz-meter-bar {
    background: ${(props) => props.theme.pointColor};
  }
  :-moz-meter-optimum::-moz-meter-bar {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }
`;
