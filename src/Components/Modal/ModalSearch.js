import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Container } from '../Container';
import SearchBar from '../Search/SearchBar';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock } from './Styles';
import { IconInfo } from '../../Assets/Icons';

const ModalSearch = ({ open, onClose, id }) => {
  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal onClose={onClose} />
      <Container>
        <SearchBar />
        <SearchTag>
          <ul>
            <li>web</li>
            <li>engine</li>
            <li>backend</li>
            <li>algorithms</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </SearchTag>
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

export default ModalSearch;

const SearchTag = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    li {
      padding: 0.2em 1em;
      margin: 0.4em;
      border: 1px solid ${(props) => props.theme.fontColor};
      border-radius: 30px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const SearchTip = styled.section`
  padding: 20px;
  background: ${(props) => props.theme.subBgColor};
  strong {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.subPointColor};
    svg {
      margin-right: 8px;
    }
  }
  p {
    margin-top: 20px;
  }
`;
