import React, { useState } from 'react';
import { StoryInfoItem, Button } from './Styles';
import { IconBy } from '../../Assets/Icons';
import ModalUser from '../Modal/ModalUser';

const InfoBy = ({ by }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <ModalUser
        open={isModalOpen}
        onClose={handleModalClose}
        title='User Information'
        id={by}
      />

      <StoryInfoItem>
        <Button onClick={handleModalOpen}>
          <IconBy /> {by}
        </Button>
      </StoryInfoItem>
    </>
  );
};

export default InfoBy;
