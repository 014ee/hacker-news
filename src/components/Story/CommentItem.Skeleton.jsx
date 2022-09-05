import React from "react";
import styled from "styled-components";

import { Container } from "components/Ui";

const CommentItemSkeleton = () => {
  return (
    <CommentItemBlock>
      <details open>
        <summary>
          <Container>
            <strong>Loading...</strong>
            <span>Loading...</span>
          </Container>
        </summary>
      </details>
    </CommentItemBlock>
  );
};

export default React.memo(CommentItemSkeleton);

const CommentItemBlock = styled.section`
  background-color: ${(props) => props.theme.subBgColor};
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  details {
    cursor: pointer;
    summary {
      padding: 20px 0;
      list-style: none;
      div {
        display: flex;
        justify-content: space-between;
        animation-duration: 3s;
        animation-name: loading;
        animation-iteration-count: infinite;
      }
      strong {
        font-size: 16px;
        color: ${(props) => props.theme.pointColor};
      }
      span {
        opacity: ${(props) => props.theme.halfOpacity};
      }
    }
    > div {
      padding-bottom: 20px;
    }
    button {
      align-items: center;
      display: flex;
      margin-top: 20px;
    }
  }

  @keyframes loading {
    0 {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
