import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';
import HeaderModal from '../Header/HeaderModal';
import { ModalBlock } from './Styles';
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
        <section>
          <h2>{story.title}ss</h2>
          <p>댓글: {story.kids}</p>
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
        </section>
      </Container>
      <div>
        <section>
          <Container>댓글 영역 {story.kids}</Container>
        </section>
      </div>
    </ModalBlock>,
    document.querySelector('#modal-root')
  );
};

export default ModalUser;
