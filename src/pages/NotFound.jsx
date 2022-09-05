import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md";

import sitemap from "settings/sitemap";
import { HeaderMain } from "components/Header";
import { Container } from "components/Ui";

const NotFound = function () {
  return (
    <>
      <HeaderMain />
      <NotFoundBlock>
        <Container>
          <h2>
            <MdErrorOutline />
            PAGE NOT FOUND
          </h2>
          <p>Sorry, that page can't be found.</p>
          <Link to={sitemap.home.path}>Go to Home</Link>
        </Container>
      </NotFoundBlock>
    </>
  );
};

export default NotFound;

const NotFoundBlock = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  text-align: center;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    svg {
      margin-right: 8px;
    }
  }
  p {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.5em;
  }
  a {
    display: block;
    margin-top: 20px;
    padding: 0.5em;
    border-radius: 4px;
    background: ${(props) => props.theme.subPointColor};
    color: #000;
    transition: all 0.2s;
    :hover {
      background: ${(props) => props.theme.pointColor};
      color: #fff;
    }
  }
`;
