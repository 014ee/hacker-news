import React from 'react';
import { NavLink } from 'react-router-dom';

import Sitemap from '../../Utils/Sitemap';
import { Container } from '../Container';
import { TabBarBlock } from './Styles';
import {
  IconHome,
  IconArticle,
  IconShow,
  IconAsk,
  IconJobs,
} from '../../Assets/Icons';

const TabBar = function () {
  return (
    <TabBarBlock>
      <Container>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'none')}
          to={Sitemap.article.path}
        >
          <span>
            <IconArticle />
            <b>{Sitemap.article.name}</b>
          </span>
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'none')}
          to={Sitemap.ask.path}
        >
          <span>
            <IconAsk />
            <b>{Sitemap.ask.name}</b>
          </span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive ? 'active circle' : 'circle'
          }
          to={Sitemap.home.path}
        >
          <span>
            <IconHome />
            <b>{Sitemap.home.name}</b>
          </span>
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'none')}
          to={Sitemap.show.path}
        >
          <span>
            <IconShow />
            <b>{Sitemap.show.name}</b>
          </span>
        </NavLink>

        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'none')}
          to={Sitemap.jobs.path}
        >
          <span>
            <IconJobs />
            <b>{Sitemap.jobs.name}</b>
          </span>
        </NavLink>
      </Container>
    </TabBarBlock>
  );
};

export default TabBar;
