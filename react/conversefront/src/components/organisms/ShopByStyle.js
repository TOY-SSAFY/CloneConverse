import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import banner_hightop from "../../resources/images/banner_hightop.jpg";
import banner_lowtop from "../../resources/images/banner_lowtop.jpg";
import banner_platform from "../../resources/images/banner_platform.jpg";
import banner_summer from "../../resources/images/banner_summer.jpg";
import arrow from "../../resources/images/rightarrow.png";

const M_section = styled.div`
  margin: 60px 0;
`;
const Corner_Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 12px;
  text-align: left;
`;
const Corner_Subtitle = styled.a`
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const Corner_Box = styled.div`
  padding: 0 0 20px;
  margin-bottom: 0;
`;
const Corner_Inner_Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 2%;
`;
const Img_Box = styled.a`
  display: inline-block;
  font-size: 16px;
  color: #fff;
  position: relative;
  background-color: #000;

  :hover {
    text-decoration: none;
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  vertical-align: middle !important;
  transition: opacity 1s cubic-bezier(0.4, 0.9, 0.3, 1);
  :hover {
    opacity: 0.7;
  }
`;
const Img_Title = styled.span`
  position: absolute;
  bottom: 20px;
  left: 30px;
`;

const SmallImg = styled.img`
  fill: currentColor;
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const ShopByStyle = () => {
  return (
    <M_section>
      <Corner_Box>
        <Corner_Inner_Box>
          <Corner_Title>Shop By Style</Corner_Title>
          <Corner_Subtitle>
            <SmallImg src={arrow} alt="push" /> 신상품 보러 가기
          </Corner_Subtitle>
        </Corner_Inner_Box>
      </Corner_Box>
      <Grid
        container
        spacing={3}
        style={{
          padding: "40px 0",
        }}
      >
        <Grid item xs={3} md>
          <Img_Box>
            <Img src={banner_hightop}></Img>
            <Img_Title>하이 탑</Img_Title>
          </Img_Box>
        </Grid>
        <Grid item xs={3} md>
          <Img_Box>
            <Img src={banner_lowtop}></Img>
            <Img_Title>로우 탑</Img_Title>
          </Img_Box>
        </Grid>
        <Grid item xs={3} md>
          <Img_Box>
            <Img src={banner_platform}></Img>
            <Img_Title>플랫폼</Img_Title>
          </Img_Box>
        </Grid>
        <Grid item xs={3} md>
          <Img_Box>
            <Img src={banner_summer}></Img>
            <Img_Title> 서머 실루엣</Img_Title>
          </Img_Box>
        </Grid>
      </Grid>
    </M_section>
  );
};

export default ShopByStyle;
