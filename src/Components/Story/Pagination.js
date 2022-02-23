import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowLeft, ArrowRight } from '../../Assets/Icons';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const params = {
    modules: [Controller, Navigation],
    spaceBetween: 0,
    slidesPerView: 5,
    slidesPerGroup: 5,
    allowTouchMove: false,
    slideToClickedSlide: true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    onClick: (swiper) => {
      swiper.activeIndex = swiper.clickedIndex;
      swiper.updateSlidesClasses();
      // swiper.clickedSlide.classList.add('swiper-slide-active');
    },
    onSlideChange: (swiper) => {
      swiper.updateSlidesClasses();
      paginate(swiper.activeIndex + 1);
    },
  };

  const onActive = ({ key }) => {};

  return (
    <PageList>
      <Swiper {...params}>
        <span className='swiper-button-prev'>
          <ArrowLeft />
        </span>
        <span className='swiper-button-next'>
          <ArrowRight />
        </span>

        {pageNumbers.map((pageNumber) => (
          <SwiperSlide key={pageNumber} onClick={onActive}>
            <PageNumber onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </PageNumber>
          </SwiperSlide>
        ))}
      </Swiper>
    </PageList>
  );
};

export default Pagination;

const PageList = styled.div`
  width: 80%;
  max-width: 300px;
  margin: 0 auto;

  & > div {
    padding: 0 12px;
  }
  .swiper-button-prev {
    left: 0px;
    color: ${(props) => props.theme.fontColor};
    opacity: ${(props) => props.theme.halfOpacity};
  }
  .swiper-button-next {
    flex-direction: row-reverse;
    right: 0px;
    color: ${(props) => props.theme.fontColor};
    opacity: ${(props) => props.theme.halfOpacity};
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-slide-active {
    button {
      color: ${(props) => props.theme.pointColor};
      opacity: 1;
    }
  }
`;

const PageNumber = styled.button`
  display: block;
  width: 100%;
  padding: 0.5em;
  text-align: center;
  opacity: ${(props) => props.theme.halfOpacity};
  cursor: pointer;
  z-index: 99;
  transition: all 0.2s;
  &:hover {
    opacity: ${(props) => props.theme.opacity};
  }
`;
