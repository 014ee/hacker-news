import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Wrapper";
import { IconGoBack } from "assets/icons";
import { HeaderTop } from "./styles";

const HeaderDetail = function ({ title }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Header>
      <HeaderTop>
        <span>
          <button onClick={goBack}>
            <IconGoBack />
          </button>
        </span>
        <h2 className="center">{title}</h2>
      </HeaderTop>
    </Header>
  );
};

export default React.memo(HeaderDetail);
