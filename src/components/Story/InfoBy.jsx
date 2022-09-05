import React, { useContext } from "react";

import { ModalDispatchContext } from "context/ModalContext";
import ModalUser from "components/Modal/User";
import { IconBy } from "assets/Icons";

const InfoBy = ({ by = "user name" }) => {
  const { openModal } = useContext(ModalDispatchContext);

  return (
    <button
      onClick={() => openModal("User Information", <ModalUser id={by} />)}
    >
      <IconBy /> {by}
    </button>
  );
};

export default InfoBy;
