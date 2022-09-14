import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalStateContext } from "context/ModalContextProvider";
import HeaderModal from "components/Header/Modal";
import { Container } from "components/Ui";
import { ModalBlock } from "./styles";

const Modal = () => {
  const { isOpen, title, content } = useContext(ModalStateContext);

  useEffect(() => {
    const setHeight = () => {
      document.querySelector(
        "#modal-root > div"
      ).style.height = `${window.innerHeight}px`;
    };
    window.addEventListener("resize", setHeight);
    return window.removeEventListener("resize", setHeight);
  }, []);

  return createPortal(
    <ModalBlock open={isOpen}>
      <HeaderModal title={title} />
      <Container>{content}</Container>
    </ModalBlock>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
