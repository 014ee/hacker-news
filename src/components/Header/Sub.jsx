import React, { useContext } from "react";

import { ModalDispatchContext } from "context/ModalContext";
import { ModalAbout, ModalSearch } from "components/Modal";
import Header from "./Wrapper";
import { IconSearch, IconOption } from "assets/Icons";
import { HeaderTop } from "./styles";

const HeaderSub = function ({ title }) {
  const { openModal } = useContext(ModalDispatchContext);

  return (
    <Header>
      <HeaderTop>
        <h2>{title}</h2>
        <span>
          <button onClick={() => openModal("Search", <ModalSearch />)}>
            <IconSearch />
          </button>
          <button onClick={() => openModal("About", <ModalAbout />)}>
            <IconOption />
          </button>
        </span>
      </HeaderTop>
    </Header>
  );
};

export default React.memo(HeaderSub);
