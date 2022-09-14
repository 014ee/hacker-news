import React, { useContext } from "react";

import { ModalDispatchContext } from "context/ModalContextProvider";
import ModalUser from "components/Modal/User";
import { IconBy } from "assets/icons";

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
