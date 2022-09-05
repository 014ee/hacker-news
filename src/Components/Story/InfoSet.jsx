import React from "react";
import styled from "styled-components";

import InfoBy from "./InfoBy";
import InfoComment from "./InfoReply";
import InfoCreated from "./InfoCreated";

const InfoSet = ({ id, by, created, kids }) => {
  return (
    <InfoSetBlock>
      <li>
        <InfoBy by={by} />
      </li>
      <li>
        <InfoCreated created={created} />
      </li>
      <li>
        <InfoComment kids={kids} id={id} />
      </li>
    </InfoSetBlock>
  );
};

InfoSet.defaultProps = {
  kids: [],
};

export default InfoSet;

const InfoSetBlock = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 8px;
  opacity: ${(props) => props.theme.halfOpacity};
  & li {
    font-size: 12px;
    line-height: 1em;
    & > * {
      display: flex;
      align-items: center;
    }
    & + * {
      display: flex;
      align-items: center;
      margin-left: 12px;
    }
    svg {
      margin-right: 4px;
      vertical-align: bottom;
    }
  }
`;
