import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock } from './Styles';
import { IconInfo } from '../../Assets/Icons';

const ModalAbout = ({ open, onClose, title }) => {
  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title={title} onClose={onClose} />
      <Container>
        <SearchTip>
          <strong>
            <IconInfo /> TIP
          </strong>
          <p>
            Show HN is for something you've made that other people can play
            with. HN users can try it out, give you feedback, and ask questions
            in the thread.
          </p>
        </SearchTip>
      </Container>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalAbout;

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
