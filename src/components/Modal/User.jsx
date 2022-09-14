import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { getUser } from "utils/getApi";
import formatCreated from "utils/formatCreated";
import { IconPoint } from "assets/icons";

import { Loading, NetworkError } from "components/State";

const ModalUser = ({ id }) => {
  const { isLoading, isError, data } = useQuery([id], () => getUser(id));

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NetworkError />;
  }

  return (
    <>
      <UserName>
        <span>user</span>
        <h2>{data.id}</h2>
      </UserName>
      <UserInfo>
        <strong>{formatCreated(data.created)} ago</strong>
        <strong>
          <IconPoint /> {data.karma}
        </strong>
        <ul>
          <li articles={data.submitted}>articles</li>
          <li articles={data.submitted}>comments</li>
          <li articles={data.submitted}>favorite</li>
        </ul>
        <p>{data.about}</p>
      </UserInfo>
    </>
  );
};

export default ModalUser;

const UserName = styled.div`
  margin-top: 60px;
  & span {
    display: inline-block;
    margin-bottom: 20px;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    background: ${(props) => props.theme.pointColor};
    font-size: 16px;
    line-height: 1rem;
    font-weight: 600;
    color: #111;
  }
  & h2 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.pointColor};
  }
`;

const UserInfo = styled.div`
  & strong {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 2em;
    color: ${(props) => props.theme.fontColor};
    svg {
      margin-right: 8px;
    }
  }
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    li {
      flex-grow: 1;
      margin-right: 20px;
      padding: 0.5em 0;
      border: 1px solid ${(props) => props.theme.fontColor};
      text-align: center;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }
  }
  & p {
    margin-top: 60px;
  }
`;
