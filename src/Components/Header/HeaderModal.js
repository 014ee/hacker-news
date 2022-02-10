import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import { IconClose } from '../../Assets/Icons';
import { HeaderTop } from './Styles';

const HeaderModal = function ({ title, onClose }) {
  return (
    <HeaderModalBlock>
      <Container>
        <HeaderTop>
          <h2>{title}</h2>
          <span>
            <button onClick={onClose}>
              <IconClose />
            </button>
          </span>
        </HeaderTop>
      </Container>
    </HeaderModalBlock>
  );
};

export default HeaderModal;

const HeaderModalBlock = styled.header`
  position: relative;
  top: 0;
  padding-top: 40px;
  padding-bottom: 18px;
  color: ${(props) => props.theme.fontColor};
`;
