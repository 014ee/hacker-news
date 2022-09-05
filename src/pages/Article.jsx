import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderSub } from "components/Header";
import { LatestStoryList } from "components/Story";
import sitemap from "settings/sitemap";
import {
  ActivePageHandlerContext,
  ArticlePageContext,
} from "context/ActivePageContext";

const Article = function () {
  const activePage = useContext(ArticlePageContext);
  const handlePageChange = useContext(ActivePageHandlerContext);
  const params = useParams();

  useEffect(() => {
    if (params.page) {
      handlePageChange(params.page);
    }
  }, []);

  return (
    <>
      <HeaderSub title={sitemap.article.name} />
      <LatestStoryList
        queryKey={sitemap.article.queryKey}
        activePage={activePage}
      />
    </>
  );
};

export default Article;
