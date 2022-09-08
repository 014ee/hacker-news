import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import formatCreated from "utils/formatCreated";
import { getStory } from "utils/getApi";
import { Container } from "components/Ui";
import CommentItemSkeleton from "./CommentItem.Skeleton";
import queryOptions from "settings/queryOptions";

const CommentItem = ({ id, type = "parent", isInView }) => {
  const { isLoading, isError, data } = useQuery([id], () => getStory(id), {
    ...queryOptions,
    enabled: isInView,
  });

  const [isShowReply, setShowReply] = useState(false);

  if (isLoading) {
    return <CommentItemSkeleton />;
  }

  if (isError) {
    return null;
  }

  if (!data.title && !data.text) return null;

  return (
    <CommentItemBlock className={type === "kid" && "kid"}>
      <details open>
        <summary>
          <Container>
            <strong className="indent">{data.by}</strong>
            <span>{formatCreated(data.created)}</span>
          </Container>
        </summary>
        <Container>
          <div
            className="text indent"
            dangerouslySetInnerHTML={{ __html: data.text }}
          ></div>
          {data.kids && (
            <button
              className="indent"
              onClick={() => setShowReply(!isShowReply)}
            >
              reply ({data.kids.length})
              {isShowReply ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </button>
          )}
        </Container>
        {isShowReply &&
          data.kids.map((id, index) => (
            <CommentItem key={data.by + id + index} id={id} type="kid" />
          ))}
      </details>
    </CommentItemBlock>
  );
};

export default React.memo(CommentItem);

const CommentItemBlock = styled.section`
  background: ${(props) => props.theme.subBgColor};
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  &.kid {
    background-color: ${(props) => props.theme.gray};
    .indent {
      padding-left: 2em;
    }
  }

  details {
    cursor: pointer;
    summary {
      padding: 20px 0;
      list-style: none;
      ::-webkit-details-marker {
        display: none;
      }
      div {
        display: flex;
        justify-content: space-between;
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
    .text {
    }
    button {
      align-items: center;
      display: flex;
      margin-top: 20px;
    }
  }
`;
