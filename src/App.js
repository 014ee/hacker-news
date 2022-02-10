import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { themes } from './theme';

import Sitemap from './Utils/Sitemap';
import TabBar from './Components/TabBar/TabBar';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Ask from './Pages/Ask';
import Show from './Pages/Show';
import Jobs from './Pages/Jobs';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <AppTemplate>
        <Routes>
          <Route path={Sitemap.home.path} element={<Home />} />
          <Route path={Sitemap.article.path} element={<Article />} />
          <Route path={Sitemap.ask.path} element={<Ask />} />
          <Route path={Sitemap.show.path} element={<Show />} />
          <Route path={Sitemap.jobs.path} element={<Jobs />} />
          <Route path={Sitemap.detail.pathVariable} element={<Detail />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        <TabBar />
      </AppTemplate>
    </ThemeProvider>
  );
}

export default App;

const AppTemplate = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;
