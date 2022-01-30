import React from 'react';
import { Link } from 'react-router-dom';
import Sitemap from '../../Utils/Sitemap';
import { TabBarBlock, TabBarList, TabBarItem } from './Styles';
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
      <TabBarList>
        <TabBarItem>
          <Link to={Sitemap.article.path}>
            <IconArticle />
            article
          </Link>
        </TabBarItem>
        <TabBarItem>
          <Link to={Sitemap.ask.path}>
            <IconAsk />
            ask
          </Link>
        </TabBarItem>
        <TabBarItem>
          <Link className='circle' to={Sitemap.home.path}>
            <IconHome />
            home
          </Link>
        </TabBarItem>
        <TabBarItem>
          <Link to={Sitemap.show.path}>
            <IconShow />
            show
          </Link>
        </TabBarItem>
        <TabBarItem>
          <Link to={Sitemap.jobs.path}>
            <IconJobs />
            jobs
          </Link>
        </TabBarItem>
      </TabBarList>
    </TabBarBlock>
  );
};

export default TabBar;
