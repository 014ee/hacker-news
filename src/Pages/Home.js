import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import HeaderMain from '../Components/Header/HeaderMain';
import TopStoryList from '../Components/Story/TopStoryList';
import { today, onedayago, twodaysago } from '../Hooks/useDateFormat';

const Home = function () {
  return (
    <>
      <HeaderMain />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <TopStoryList title={today} type='best' />
        </SwiperSlide>
        <SwiperSlide>
          <TopStoryList title={onedayago} type='best' />
        </SwiperSlide>
        <SwiperSlide>
          <TopStoryList title={twodaysago} type='best' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
