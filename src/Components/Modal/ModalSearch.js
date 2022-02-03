import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock, UserName, UserInfo } from './Styles';
import { IconPoint } from '../../Assets/Icons';
import { getUser } from '../../Hooks/useApi';
import { useDateFormat } from '../../Hooks/useDateFormat';
import SearchBar from '../Search/SearchBar';

const ModalSearch = ({ open, onClose, title, id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((data) => data && setUser(data));
  }, []);

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title={title} onClose={onClose} />
      <Container>
        <SearchBar />
        <ul>
          <li>태그</li>
          <li>태그</li>
          <li>태그</li>
          <li>태그</li>
        </ul>
        <section>
          <strong>TIP</strong>
          <p>내용~~</p>
        </section>
      </Container>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalSearch;
