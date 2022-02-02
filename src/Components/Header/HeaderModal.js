import React from 'react';
import { Container } from '../Container';
import {
  HeaderModalBlock,
  HeaderTop,
  HeaderTitle,
  HeaderOption,
  OptionButton,
} from './Styles';
import { IconClose } from '../../Assets/Icons';

const HeaderModal = function ({ title, onClose }) {
  return (
    <HeaderModalBlock>
      <Container>
        <HeaderTop>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderOption>
            <OptionButton onClick={onClose}>
              <IconClose />
            </OptionButton>
          </HeaderOption>
        </HeaderTop>
      </Container>
    </HeaderModalBlock>
  );
};

export default HeaderModal;
