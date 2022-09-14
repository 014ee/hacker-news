import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import {
  ArticlePageContext,
  AskPageContext,
  JobsPageContext,
  ShowPageContext,
} from "context/ActivePageContextProvider";
import sitemap from "settings/sitemap";
import { TabBarBlock } from "./styles";
import {
  IconHome,
  IconArticle,
  IconShow,
  IconAsk,
  IconJobs,
} from "assets/icons";

const TabBar = function () {
  const articlePage = useContext(ArticlePageContext);
  const askPage = useContext(AskPageContext);
  const showPage = useContext(ShowPageContext);
  const jobsPage = useContext(JobsPageContext);

  return (
    <TabBarBlock>
      {/* Article Page */}
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to={`${sitemap.article.path}${articlePage}`}
      >
        <span>
          <IconArticle />
          <b>{sitemap.article.name}</b>
        </span>
      </NavLink>
      {/* Ask Page */}
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to={`${sitemap.ask.path}${askPage}`}
      >
        <span>
          <IconAsk />
          <b>{sitemap.ask.name}</b>
        </span>
      </NavLink>
      {/* Home Page */}
      <NavLink
        className={(navData) => (navData.isActive ? "active circle" : "circle")}
        to={sitemap.home.path}
      >
        <span>
          <IconHome />
          <b>{sitemap.home.name}</b>
        </span>
      </NavLink>
      {/* Show Page */}
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to={`${sitemap.show.path}${showPage}`}
      >
        <span>
          <IconShow />
          <b>{sitemap.show.name}</b>
        </span>
      </NavLink>
      {/* Jobs Page */}
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to={`${sitemap.jobs.path}${jobsPage}`}
      >
        <span>
          <IconJobs />
          <b>{sitemap.jobs.name}</b>
        </span>
      </NavLink>
    </TabBarBlock>
  );
};

export default TabBar;
