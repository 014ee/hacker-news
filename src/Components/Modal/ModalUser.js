import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { getUser } from '../../Hooks/useApi';
import { useDateFormat } from '../../Hooks/useDateFormat';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { IconPoint } from '../../Assets/Icons';
import { ModalBlock } from './Styles';

const ModalUser = ({ open, onClose, id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((data) => data && setUser(data));
  }, [id]);

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title='User Information' onClose={onClose} />
      <Container>
        <UserName>
          <span>user</span>
          <h2>{user.id}</h2>
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

const UserName = styled.div`
  margin-top: 60px;
  & span {
    display: inline-block;
    margin-bottom: 20px;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    background: ${(props) => props.theme.pointColor};
    font-size: 16px;
    line-height: 1rem;
    font-weight: 600;
    color: #111;
  }
  & h2 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.pointColor};
  }
`;

const UserInfo = styled.div`
  & strong {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 2em;
    color: ${(props) => props.theme.fontColor};
    svg {
      margin-right: 8px;
    }
  }
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    li {
      flex-grow: 1;
      margin-right: 20px;
      padding: 0.5em 0;
      border: 1px solid ${(props) => props.theme.fontColor};
      text-align: center;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }
  }
  & p {
    margin-top: 60px;
  }
`;
