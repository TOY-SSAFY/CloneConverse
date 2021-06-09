import React from "react";
import Container from "@material-ui/core/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import styled from "styled-components";
import "../../styles/Headers/NoticeComponent.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const top_banner_box = {
  textAlign: "center",
  background: "#e5e5e5",
  height: "70px",
  position: "relative",
  paddingTop: "15px",
};
const swiper_style = {
  fontFamily: "proxima, NanumGothic, Arial, sans-serif",
};

const Swiper_subtitle = styled.div`
  font-size: 12px;
  font-weight: 900;
`;
const Swiper_title = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

// const swiper_prev = styled.swiper-button-next`
//   background-image: url("/src/resources/images/rightarrow.png") !important;
// `

const NoticeBar = () => {
  return (
    <div style={top_banner_box}>
      <Container maxWidth="sm">
        <Swiper
          className="banner"
          spaceBetween={500}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 1000 }}
          style={swiper_style}
        >
          <SwiperSlide>
            <div>
              <Swiper_subtitle>NOTICE</Swiper_subtitle>
              <Swiper_title>로그인 관련 안내</Swiper_title>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Swiper_subtitle>NEW</Swiper_subtitle>
              <Swiper_title>화이트 캔버스 컬렉션 출시 안내</Swiper_title>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Swiper_subtitle>EVENT</Swiper_subtitle>
              <Swiper_title>척 70 무료 판매</Swiper_title>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Swiper_subtitle>EVENT</Swiper_subtitle>
              <Swiper_title>척 80 신규 발매</Swiper_title>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default NoticeBar;
