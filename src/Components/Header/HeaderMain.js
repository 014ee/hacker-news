import React, { useState } from 'react';

import { Container } from '../Container';
import SearchBar from '../Search/SearchBar';
import { IconLogo, IconUser } from '../../Assets/Icons';
import { HeaderBlock, HeaderTop } from './Styles';
import ModalUser from '../Modal/ModalUser';

const HeaderMain = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <ModalUser
          open={isModalOpen}
          onClose={handleModalClose}
          title='My Information'
        />
      )}

      <HeaderBlock>
        <Container>
          <HeaderTop>
            <h1>
              <IconLogo />
            </h1>
            <span>
              <button onClick={handleModalOpen}>
                <IconUser />
              </button>
            </span>
          </HeaderTop>
          <SearchBar />
        </Container>
      </HeaderBlock>
    </>
  );
};

export default HeaderMain;
