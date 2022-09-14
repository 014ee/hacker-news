import React from "react";
import styled from "styled-components";

import { Container } from "components/Ui";
import InfoSet from "../InfoSet";
import { IconPointOn } from "assets/icons";

const StoryItem = ({ data, index }) => {
  return (
    <StoryItemBlock>
      <Container>
        <StoryIndex>{index + 2}</StoryIndex>
        <h2>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </h2>
        <span className="url">{data.url}</span>
        <InfoSet
          id={data.id}
          by={data.by}
          created={data.created}
          comments={data.comments}
        />
        <div className="pointbar">
          <span>
            <IconPointOn />
            {data.score}
          </span>
          <PointBar max="300" min="0" value={data.score} />
        </div>
      </Container>
    </StoryItemBlock>
  );
};

export default StoryItem;

const StoryItemBlock = styled.article`
  display:block;
  padding: 12px 0;
  margin: 12px 0;
  background: ${(props) => props.theme.cardBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  & > div{
    max-width: 80%;
  }
  & h2 {
    font-size: 16px;
    letter-spacing: 0.04em;
  }
  & span.url {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
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
}
`;

const StoryIndex = styled.span`
  position: absolute;
  left: -16px;
  display: inline-block;
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
