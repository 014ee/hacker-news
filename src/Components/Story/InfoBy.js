import React, { useState } from 'react';

import { IconBy } from '../../Assets/Icons';
import ModalUser from '../Modal/ModalUser';

const InfoBy = ({ by }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <ModalUser open={isModalOpen} onClose={handleModalClose} id={by} />
      )}

      <button onClick={handleModalOpen}>
        <IconBy /> {by}
      </button>
    </>
  );
};

export default InfoBy;
