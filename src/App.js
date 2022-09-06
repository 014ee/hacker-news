import React, { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import ModalContextProvider from "context/ModalContext";
import ActivePageContextProvider from "context/ActivePageContext";
import { themes } from "css/theme";

// 라우트
import sitemap from "settings/sitemap";
import TabBar from "components/TabBar";
import { NetworkError, Loading } from "components/State";
const Show = lazy(() => import("pages/Show"));
const Jobs = lazy(() => import("pages/Jobs"));
const Detail = lazy(() => import("pages/Detail"));
const NotFound = lazy(() => import("pages/NotFound"));
const Article = lazy(() => import("pages/Article"));
const Home = lazy(() => import("pages/Home"));
const Ask = lazy(() => import("pages/Ask"));

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    console.log(performance.now);
  }, []);
  return (
    <ErrorBoundary FallbackComponent={NetworkError}>
      <ThemeProvider theme={themes.dark}>
        <QueryClientProvider client={queryClient}>
          <ModalContextProvider>
            <ActivePageContextProvider>
              <AppBlock>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path={sitemap.home.path} element={<Home />} />
                    <Route
                      path={sitemap.article.pathVariable}
                      element={<Article />}
                    />
                    <Route path={sitemap.ask.pathVariable} element={<Ask />} />
                    <Route
                      path={sitemap.show.pathVariable}
                      element={<Show />}
                    />
                    <Route
                      path={sitemap.jobs.pathVariable}
                      element={<Jobs />}
                    />
                    <Route
                      path={sitemap.detail.pathVariable}
                      element={<Detail />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <TabBar />
              </AppBlock>
            </ActivePageContextProvider>
          </ModalContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

const AppBlock = styled.div`
  min-height: 100vh;
  padding-bottom: 140px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;
