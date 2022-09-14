import React, { useContext } from "react";
import styled from "styled-components";

import { ModalDispatchContext } from "context/ModalContextProvider";
import { Container } from "components/Ui";
import { IconClose } from "assets/icons";
import { HeaderTop } from "./styles";

const HeaderModal = function ({ title }) {
  const { closeModal } = useContext(ModalDispatchContext);

  return (
    <HeaderModalBlock>
      <Container>
        <HeaderTop>
          <h2>{title}</h2>
          <span>
            <button onClick={closeModal}>
              <IconClose />
            </button>
          </span>
        </HeaderTop>
      </Container>
    </HeaderModalBlock>
  );
};

export default React.memo(HeaderModal);

const HeaderModalBlock = styled.header`
  position: relative;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  color: ${(props) => props.theme.fontColor};
`;
