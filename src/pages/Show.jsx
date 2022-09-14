import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import sitemap from "settings/sitemap";
import { HeaderSub } from "components/Header";
import { LatestStoryList } from "components/Story";
import {
  ActivePageHandlerContext,
  ShowPageContext,
} from "context/ActivePageContextProvider";

const Show = function () {
  const activePage = useContext(ShowPageContext);
  const handlePageChange = useContext(ActivePageHandlerContext);
  const params = useParams();

  useEffect(() => {
    if (params.page) {
      handlePageChange(params.page);
    }
  }, []);

  return (
    <>
      <HeaderSub title={sitemap.show.name} />
      <LatestStoryList
        queryKey={sitemap.show.queryKey}
        activePage={activePage}
      />
    </>
  );
};

export default Show;
