import React, { useContext } from "react";

import { ModalDispatchContext } from "context/ModalContextProvider";
import { ModalAbout, ModalSearch } from "components/Modal";
import Header from "./Wrapper";
import { IconSearch, IconOption } from "assets/icons";
import { HeaderTop } from "./styles";

const HeaderSub = function ({ title }) {
  const { openModal } = useContext(ModalDispatchContext);

  return (
    <Header>
      <HeaderTop>
        <h2>{title}</h2>
        <span>
          <button
            onClick={() => openModal("Search", <ModalSearch />)}
            type="button"
            aria-label="search button"
          >
            <IconSearch />
          </button>
          <button
            onClick={() => openModal("About", <ModalAbout />)}
            type="button"
            aria-label="about button"
          >
            <IconOption />
          </button>
        </span>
      </HeaderTop>
    </Header>
  );
};

export default React.memo(HeaderSub);
