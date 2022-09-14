import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { ModalStateContext } from "context/ModalContextProvider";
import HeaderModal from "components/Header/Modal";
import { Container } from "components/Ui";
import { ModalBlock } from "./styles";

const Modal = () => {
  const { isOpen, title, content } = useContext(ModalStateContext);

  return createPortal(
    <ModalBlock open={isOpen} style={{ height: window.innerHeight }}>
      <HeaderModal title={title} />
      <Container>{content}</Container>
    </ModalBlock>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
