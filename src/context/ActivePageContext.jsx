import React, { useState } from "react";
import getPagenameFromParams from "utils/getPagenameFromParams";
import sitemap from "settings/sitemap";

export const ArticlePageContext = React.createContext();
export const AskPageContext = React.createContext();
export const ShowPageContext = React.createContext();
export const JobsPageContext = React.createContext();
export const ActivePageHandlerContext = React.createContext();

const ActivePageContextProvider = ({ children }) => {
  const [articlePage, setArticlePage] = useState(1);
  const [askPage, setAskPage] = useState(1);
  const [showPage, setShowPage] = useState(1);
  const [jobsPage, setJobsPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    const pageName = getPagenameFromParams();
    window.localStorage.setItem(pageName, pageNumber);

    switch (pageName) {
      case sitemap.article.name:
        setArticlePage(Number(pageNumber));
        break;
      case sitemap.ask.name:
        setAskPage(Number(pageNumber));
        break;
      case sitemap.show.name:
        setShowPage(Number(pageNumber));
        break;
      case sitemap.jobs.name:
        setJobsPage(Number(pageNumber));
        break;
      default:
        break;
    }
  };

  return (
    <ArticlePageContext.Provider value={articlePage}>
      <AskPageContext.Provider value={askPage}>
        <ShowPageContext.Provider value={showPage}>
          <JobsPageContext.Provider value={jobsPage}>
            <ActivePageHandlerContext.Provider value={handlePageChange}>
              {children}
            </ActivePageHandlerContext.Provider>
          </JobsPageContext.Provider>
        </ShowPageContext.Provider>
      </AskPageContext.Provider>
    </ArticlePageContext.Provider>
  );
};

export default ActivePageContextProvider;
