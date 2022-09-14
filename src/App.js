import React, { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import ModalContextProvider from "context/ModalContextProvider";
import ActivePageContextProvider from "context/ActivePageContextProvider";
import ThemeButton from "components/Ui/ThemeButton";
import { dark, light } from "./theme";

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
  const [theme, setTheme] = useState("dark");
  const themeMode = theme === "dark" ? dark : light;
  const handleSetTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ErrorBoundary FallbackComponent={NetworkError}>
      <ThemeProvider theme={themeMode}>
        <QueryClientProvider client={queryClient}>
          <ModalContextProvider>
            <ActivePageContextProvider>
              <AppBlock>
                <ThemeButton theme={theme} setTheme={handleSetTheme} />
                <TabBar />
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route
                      path={sitemap.home.path}
                      element={<Home setTheme={handleSetTheme} />}
                    />
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
              </AppBlock>
            </ActivePageContextProvider>
          </ModalContextProvider>
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
