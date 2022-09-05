import React from "react";
import styled from "styled-components";

import { Container } from "components/Ui";

const Header = function ({ children }) {
  return (
    <HeaderBlock>
      <Container>{children}</Container>
    </HeaderBlock>
  );
};

export default Header;

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 9;
`;
