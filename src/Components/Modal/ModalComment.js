import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock, UserName, UserInfo } from './Styles';
import { getStory } from '../../Hooks/useApi';
import { IconBy, IconTime, IconComment } from '../../Assets/Icons';

const ModalUser = ({ open, onClose, title, id }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(id).then((data) => data && setStory(data));
  });

  return createPortal(
    <ModalBlock open={open} onClose={onClose}>
      <HeaderModal title={title} onClose={onClose} />
      <Container>
        <UserName>
          <span>comment</span>
          <h2>{story.title}</h2>
        </UserName>
        <ul>
          <li>
            <IconBy />
            {story.by}
          </li>
          <li>
            <IconTime />
            {story.time}
          </li>
          <li>
            <IconComment />
            {(story.comment = 0)}
          </li>
        </ul>
      </Container>
      <div>
        <section>
          <Container>dd</Container>
        </section>
      </div>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalUser;
