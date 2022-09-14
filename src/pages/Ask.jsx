import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import sitemap from "settings/sitemap";
import { HeaderSub } from "components/Header";
import { LatestStoryList } from "components/Story";
import {
  ActivePageHandlerContext,
  AskPageContext,
} from "context/ActivePageContextProvider";

const Ask = function () {
  const activePage = useContext(AskPageContext);
  const handlePageChange = useContext(ActivePageHandlerContext);
  const params = useParams();

  useEffect(() => {
    if (params.page) {
      handlePageChange(params.page);
    }
  }, []);

  return (
    <>
      <HeaderSub title={sitemap.ask.name} />
      <LatestStoryList
        queryKey={sitemap.ask.queryKey}
        activePage={activePage}
      />
    </>
  );
};

export default Ask;
