import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';
import {
  HeaderBlock,
  HeaderTop,
  HeaderDetailTitle,
  HeaderOption,
  OptionButton,
  GobackButton,
} from './Styles';
import { IconOption, IconGoBack } from '../../Assets/Icons';

const HeaderSub = function ({ title }) {
  const navigate = useNavigate();
  return (
    <HeaderBlock>
      <Container>
        <HeaderTop>
          <GobackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <IconGoBack />
          </GobackButton>
          <HeaderDetailTitle>{title}</HeaderDetailTitle>
          <HeaderOption>
            <OptionButton>
              <IconOption />
            </OptionButton>
          </HeaderOption>
        </HeaderTop>
      </Container>
    </HeaderBlock>
  );
};

export default HeaderSub;
