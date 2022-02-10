import React, { useState } from 'react';

import { Container } from '../Container';
import { IconSearch, IconOption } from '../../Assets/Icons';
import { HeaderBlock, HeaderTop } from './Styles';
import ModalSearch from '../Modal/ModalSearch';
import ModalAbout from '../Modal/ModalAbout';

const HeaderSub = function ({ title }) {
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);
  const handleModalSearchOpen = () => setIsModalSearchOpen(true);
  const handleModalSearchClose = () => setIsModalSearchOpen(false);

  const [isModalAboutOpen, setIsModalAboutOpen] = useState(false);
  const handleModalAboutOpen = () => setIsModalAboutOpen(true);
  const handleModalAboutClose = () => setIsModalAboutOpen(false);

  return (
    <>
      <ModalSearch
        open={isModalSearchOpen}
        onClose={handleModalSearchClose}
        title='Search'
      />

      <ModalAbout
        open={isModalAboutOpen}
        onClose={handleModalAboutClose}
        title='About'
      />

      <HeaderBlock>
        <Container>
          <HeaderTop>
            <h2>{title}</h2>
            <span>
              <button onClick={handleModalSearchOpen}>
                <IconSearch />
              </button>
              <button onClick={handleModalAboutOpen}>
                <IconOption />
              </button>
            </span>
          </HeaderTop>
        </Container>
      </HeaderBlock>
    </>
  );
};

export default HeaderSub;
