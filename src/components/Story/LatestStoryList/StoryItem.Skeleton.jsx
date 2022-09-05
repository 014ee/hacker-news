import React from "react";
import styled from "styled-components";

import { IconPointOn } from "assets/Icons";
import InfoSet from "../InfoSet";

function StoryItemSkeleton() {
  return (
    <StoryItemBlock>
      <span className="url"></span>

      <h2 className="title">제목</h2>

      <div className="pointbar">
        <span>
          <IconPointOn />0
        </span>
        <PointBar
          max="300"
          min="0"
          low="299"
          height="300"
          optimum="300"
          value="0"
        />
      </div>
      <InfoSet />
    </StoryItemBlock>
  );
}

export default StoryItemSkeleton;

const StoryItemBlock = styled.article`
  display: block;
  margin-top: 12px;
  padding: 12px 0;

  & span.url {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    margin-bottom: 6px;
    width: 30%;
    height: 0.4rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.gray};
  }

  & h2.title {
    width: 20%;
    height: 0.8rem;
    border-radius: 4px;
    background: ${(props) => props.theme.gray};
    font-size: 0;
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
