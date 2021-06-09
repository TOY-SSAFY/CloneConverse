import React from "react";
import Container from "@material-ui/core/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const top_banner_box = {
  textAlign: "center",
  background: "#e5e5e5",
  height: "70px",
  position: "relative",
  zIndex: 13,
  paddingTop: "30px",
};
const bannerTitle = {
  fontFamily: "proxima, NanumGothic, Arial, sans-serif",
};

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
          style={bannerTitle}
        >
          <SwiperSlide>
            <ArrowForwardIcon />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default NoticeBar;
