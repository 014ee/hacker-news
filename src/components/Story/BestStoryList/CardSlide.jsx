import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

import Card from "components/Ui/Card";
import { IconPointOn } from "assets/icons";
import InfoSet from "../InfoSet";
import { getOnlyDomainName } from "utils/regExp";

const CardSlide = ({ data, dateList, setActivedDate }) => {
  const navigate = useNavigate();

  return (
    <section style={{ margin: "2rem 0" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        dir="rtl"
        onSlideChange={(event) => {
          setActivedDate(event.activeIndex);
        }}
      >
        {dateList.map((index) => {
          return (
            <SwiperSlide key={index} dir="ltr">
              <Card>
                <Content>
                  <span className="url">
                    {data.url && data.url.match(getOnlyDomainName)}
                  </span>
                  <span className="first">1</span>
                  {data ? (
                    <h2>
                      <a href={data.url} target="_blank" rel="noreferrer">
                        {data.title}
                      </a>
                    </h2>
                  ) : (
                    <>
                      <h2>오늘의 베스트 글이 아직 없습니다.</h2>
                      <button
                        className="button-redirection"
                        onClick={() => navigate("/article/1")}
                      >
                        최신글 보러가기
                      </button>
                    </>
                  )}
                  <InfoSet
                    id={data.id}
                    by={data.by}
                    created={data.created}
                    comments={data.comments}
                  />
                  <div className="pointbar">
                    <IconPointOn />
                    <PointBar max="300" min="0" value={data.score} />
                  </div>
                </Content>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CardSlide;

const Content = styled.div`
  span.url {
    display: block;
    text-align: right;
  }
  span.first {
    display: inline-block;
    margin-bottom: 12px;
    width: 2rem;
    height: 2rem;
    line-height: 32px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.black};
  }
  h2 {
    font-size: 24px;
    line-height: 1.4em;
    font-weight: 800;
    color: ${(props) => props.theme.fontColor};
  }
  button.button-redirection {
    margin-top: 2em;
  }
  ul {
    margin: 1.8rem 0;
  }
  .pointbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
  }
`;

const PointBar = styled.meter`
  position: relative;
  flex-grow: 1;
  margin-left: 12px;
  height: 10px;
  border: 0;
  background: ${(props) => props.theme.gray};
  border-radius: 3px;

  ::after {
    content: "300+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    line-height: 1;
  }
  ::-webkit-meter-bar {
    height: 10px;
    border: 0;
    background: ${(props) => props.theme.gray};
    border-radius: 8px;
  }
  ::-webkit-meter-suboptimum-value {
    background: ${(props) => props.theme.pointColor};
  }
  ::-webkit-meter-optimum-value {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }

  :-moz-meter-sub-optimum::-moz-meter-bar {
    background: ${(props) => props.theme.pointColor};
  }
  :-moz-meter-optimum::-moz-meter-bar {
    background: linear-gradient(
      90deg,
      #ff9696 0%,
      #ff0303 66.28%,
      #ff4949 129.85%
    );
  }
`;
