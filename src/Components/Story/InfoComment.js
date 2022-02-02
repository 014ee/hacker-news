import React, { useEffect, useState } from 'react';
import { StoryInfoItem, Button } from './Styles';
import { IconComment } from '../../Assets/Icons';
import ModalComment from '../Modal/ModalComment';

const InfoComment = ({ id, kids }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <ModalComment
        open={isModalOpen}
        onClose={handleModalClose}
        title='Comment'
        id={id}
      />

      <StoryInfoItem>
        <Button onClick={handleModalOpen}>
          <IconComment /> {kids.length}
        </Button>
      </StoryInfoItem>
    </>
  );
};

InfoComment.defaultProps = {
  kids: [],
};

export default InfoComment;
