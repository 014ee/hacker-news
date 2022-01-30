import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Container } from '../Container';

const ModalBlock = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  transform: ${(props) => (props.open ? 'none' : 'translateY(100vh)')};
  transition: 0.25s transform ease-in-out;
  z-index: 999;
`;

const Modal = ({ open, onClose }) => {
  //const [isModalOpen, setIsModalOpen] = useState({ visible });

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <Container>
        <div onClick={onClose}>닫기</div>
        모달 팝업 화면입니다.
      </Container>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
