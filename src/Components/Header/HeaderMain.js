import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import Sitemap from '../../Utils/Sitemap';
import {
  HeaderBlock,
  HeaderTop,
  HeaderLogo,
  HeaderOption,
  OptionButton,
} from './Styles';
import { IconLogo, IconUser } from '../../Assets/Icons';
import SearchBar from '../Search/SearchBar';

const HeaderMain = function () {
  return (
    <HeaderBlock>
      <Container>
        <HeaderTop>
          <HeaderLogo>
            <Link to={Sitemap.home.path}>
              <IconLogo />
            </Link>
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
