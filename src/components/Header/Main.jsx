import React, { useContext } from "react";

import { ModalDispatchContext } from "context/ModalContextProvider";
import { ModalUser } from "components/Modal";
import SearchBar from "components/SearchBar/index.jsx";
import { IconLogo, IconUser } from "assets/icons";
import Header from "./Wrapper";
import { HeaderTop } from "./styles";

const HeaderMain = function () {
  const { openModal } = useContext(ModalDispatchContext);

  return (
    <Header>
      <HeaderTop>
        <h1>
          <IconLogo />
        </h1>
        <span>
          <button onClick={() => openModal("My Information", <ModalUser />)}>
            <IconUser />
          </button>
        </span>
      </HeaderTop>
      <SearchBar />
    </Header>
  );
};

export default React.memo(HeaderMain);
