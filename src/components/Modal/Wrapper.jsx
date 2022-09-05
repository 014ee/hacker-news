import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { ModalStateContext } from "context/ModalContext";
import HeaderModal from "components/Header/Modal";
import { Container } from "components/Ui";
import { ModalBlock } from "./styles";

const Modal = () => {
  const { isOpen, title, content } = useContext(ModalStateContext);

  return createPortal(
    <ModalBlock open={isOpen}>
      <HeaderModal title={title} />
      <Container>{content}</Container>
    </ModalBlock>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
