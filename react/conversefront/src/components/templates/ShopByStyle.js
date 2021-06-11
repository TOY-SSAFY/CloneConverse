import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import banner_hightop from "../../resources/images/banner_hightop.jpg";
import banner_lowtop from "../../resources/images/banner_lowtop.jpg";
import banner_platform from "../../resources/images/banner_platform.jpg";
import banner_summer from "../../resources/images/banner_summer.jpg";

const M_section = styled.div`
  margin: 60px 0;
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
`;
const Img_Title = styled.span`
  position: absolute;
  bottom: 50px;
  left: -147px;
  display: inline-block;
  width: 25%;
  font-size: 16px;
  color: #fff;
  position: relative;
`;

const ShopByStyle = () => {
  return (
    <M_section>
      <Grid
        container
        spacing={3}
        style={{
          padding: "40px 0",
        }}
      >
        <Grid item xs={3} md>
          <Img src={banner_hightop}></Img>
          <Img_Title>하이 탑</Img_Title>
        </Grid>
        <Grid item xs={3} md>
          <Img src={banner_lowtop}></Img>
          <Img_Title>로우 탑</Img_Title>
        </Grid>
        <Grid item xs={3} md>
          <Img src={banner_platform}></Img>
          <Img_Title>플랫폼</Img_Title>
        </Grid>
        <Grid item xs={3} md>
          <Img src={banner_summer}></Img>
          <Img_Title style={{ left: "-130px" }}> 서머 실루엣</Img_Title>
        </Grid>
      </Grid>
    </M_section>
  );
};

export default ShopByStyle;
