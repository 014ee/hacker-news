import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import sitemap from "settings/sitemap";
import HeaderSub from "components/Header/Sub";
import { LatestStoryList } from "components/Story";
import {
  ActivePageHandlerContext,
  JobsPageContext,
} from "context/ActivePageContextProvider";

const Jobs = function () {
  const activePage = useContext(JobsPageContext);
  const handlePageChange = useContext(ActivePageHandlerContext);
  const params = useParams();

  useEffect(() => {
    if (params.page) {
      handlePageChange(params.page);
    }
  }, []);

  return (
    <>
      <HeaderSub title={sitemap.jobs.name} />
      <LatestStoryList
        queryKey={sitemap.jobs.queryKey}
        activePage={activePage}
      />
    </>
  );
};

export default Jobs;
