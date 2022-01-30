import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Sitemap from './Utils/Sitemap';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Show from './Pages/Show';
import Ask from './Pages/Ask';
import Jobs from './Pages/Jobs';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import TabBar from './Components/TabBar/TabBar';
import { themes } from './Styles/theme';

import Modal from './Components/Modal/Modal';

const AppTemplate = styled.div`
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <ThemeProvider theme={themes.dark}>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <p>모달 버튼의 자식들</p>
      </Modal>

      <AppTemplate>
        <button
          onClick={handleModalOpen}
          style={{
            position: 'fixed',
            bottom: 0,
            background: 'pink',
            cursor: 'pointer',
            zIndex: 9,
          }}
        >
          모달 버튼
        </button>

        <Routes>
          <Route path={Sitemap.home.path} element={<Home />} />
          <Route path={Sitemap.article.path} element={<Article />} />
          <Route path={Sitemap.show.path} element={<Show />} />
          <Route path={Sitemap.ask.path} element={<Ask />} />
          <Route path={Sitemap.jobs.path} element={<Jobs />} />
          <Route path={Sitemap.detail.pathVariable} element={<Detail />} />
          {/* <Route path={Sitemap.user.pathVariable} element={<Jobs />} /> */}
          <Route element={<NotFound />} />
        </Routes>
        <TabBar />
      </AppTemplate>
    </ThemeProvider>
  );
}

export default App;
