import React from "react";

import sitemap from "settings/sitemap";
import formatDate from "utils/formatDate";
import { HeaderMain } from "components/Header";
import { BesStoryList } from "components/Story";

const Home = function () {
  const today = new Date();
  const dateList = [
    formatDate(today),
    formatDate(new Date(new Date().setDate(today.getDate() - 1))),
    formatDate(new Date(new Date().setDate(today.getDate() - 2))),
  ];

  return (
    <>
      <HeaderMain />
      <BesStoryList queryKey={sitemap.home.queryKey} dateList={dateList} />
    </>
  );
};

export default Home;
