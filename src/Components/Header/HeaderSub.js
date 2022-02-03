import React, { useState } from 'react';
import { Container } from '../Container';
import ModalSearch from '../Modal/ModalSearch';
import {
  HeaderBlock,
  HeaderTop,
  HeaderTitle,
  HeaderOption,
  OptionButton,
} from './Styles';
import { IconSearch, IconOption } from '../../Assets/Icons';

const HeaderSub = function ({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <ModalSearch
        open={isModalOpen}
        onClose={handleModalClose}
        title='Search'
      />

      <HeaderBlock>
        <Container>
          <HeaderTop>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderOption>
              <OptionButton onClick={handleModalOpen}>
                <IconSearch />
              </OptionButton>
              <OptionButton>
                <IconOption />
              </OptionButton>
            </HeaderOption>
          </HeaderTop>
        </Container>
      </HeaderBlock>
    </>
  );
};

export default HeaderSub;
