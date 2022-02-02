import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock, UserName, UserInfo } from './Styles';
import { IconPoint } from '../../Assets/Icons';
import { getUser } from '../../Hooks/useApi';
import { useDateFormat } from '../../Hooks/useDateFormat';

const ModalUser = ({ open, onClose, title, id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((data) => data && setUser(data));
  }, []);

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title={title} onClose={onClose} />
      <Container>
        <UserName>
          <span>user</span>
          <h2>{id}</h2>
        </UserName>
        <UserInfo>
          <strong>{useDateFormat(user.created)} ago</strong>
          <strong>
            <IconPoint /> {user.karma}
          </strong>
          <ul>
            <li articles={user.submitted}>articles</li>
            <li articles={user.submitted}>comments</li>
            <li articles={user.submitted}>favorite</li>
          </ul>
          <p>{user.about}</p>
        </UserInfo>
      </Container>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalUser;
