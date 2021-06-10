import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard } from "../molecules";

import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg"
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg"
import chuck70mint from "../../resources/images/chuck_70_seasonal_canvas_mint.jpg"
import chuck70mint2 from "../../resources/images/chuck_70_seasonal_canvas_mint2.jpg"
import chuck70poster from "../../resources/images/chuck70_seasonal_canvas_poster.jpg"

const RowBox = styled.div`
  display : flex;
  flex-direction : row;
`

const Img = styled.img`
  width:100%;
  height:100%;
`

const ProductBlock = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Grid item xs={12}
          >
            <VideoCard
              videoSrc="https://video.bbsclub.kr/%5BSHANA%5DSU21_SEASONAL_COLOR_RSH_LOW_YELLOW_170778C_MOTION_6 (1).mp4"
              text="척 70 시즈널 캔버스 샴페인"
            />
          </Grid>
          <Grid item xs={12}>
            <RowBox>
              <Grid item xs={6}>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCard
                  image1={chuck70mint}
                  image2={chuck70mint2}
                />
              </Grid>
            </RowBox>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Img src={chuck70poster} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductBlock;


