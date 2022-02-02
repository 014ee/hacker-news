import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock, UserName, UserInfo } from './Styles';
import { IconPoint } from '../../Assets/Icons';
import { getStory } from '../../Hooks/useApi';
import { useDateFormat } from '../../Hooks/useDateFormat';

const ModalUser = ({ open, onClose, title, id }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(id).then((data) => data && setStory(data));
  }, []);

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title={title} onClose={onClose} />
      <Container>
        <UserName>
          <span>comment</span>
          <h2>{story.id}</h2>
        </UserName>
        <UserInfo>
          <strong>{useDateFormat(story.id)} ago</strong>
          <strong>
            <IconPoint /> {story.id}
          </strong>
          <p>{story.id}</p>
        </UserInfo>
      </Container>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalUser;
