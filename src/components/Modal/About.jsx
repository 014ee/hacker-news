import React from "react";
import styled from "styled-components";

import { IconInfo } from "assets/icons";

const ModalAbout = () => {
  return (
    <SearchTip>
      <strong>
        <IconInfo /> TIP
      </strong>
      <p>
        Show HN is for something you've made that other people can play with. HN
        users can try it out, give you feedback, and ask questions in the
        thread.
      </p>
    </SearchTip>
  );
};

export default React.memo(ModalAbout);

const SearchTip = styled.section`
  padding: 20px;
  background: ${(props) => props.theme.subBgColor};
  strong {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    text-indet: 2;
    color: ${(props) => props.theme.subPointColor};
    svg {
      margin-right: 8px;
    }
  }
  p {
    margin-top: 20px;
  }
`;
