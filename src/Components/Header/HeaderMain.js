import React from 'react';
import { Container } from '../Container';
import {
  HeaderBlock,
  HeaderTop,
  HeaderLogo,
  HeaderOption,
  OptionButton,
} from './Styles';
import { Logo, IconUser } from '../../Assets/Icons';
import SearchBar from '../Search/SearchBar';

const HeaderMain = function () {
  return (
    <HeaderBlock>
      <Container>
        <HeaderTop>
          <HeaderLogo>
            <Logo />
          </HeaderLogo>
          <HeaderOption>
            <OptionButton>
              <IconUser />
            </OptionButton>
          </HeaderOption>
        </HeaderTop>
        <SearchBar />
      </Container>
    </HeaderBlock>
  );
};

export default HeaderMain;
