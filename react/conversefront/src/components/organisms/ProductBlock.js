import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg"
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg"
import chuck70mint from "../../resources/images/chuck_70_seasonal_canvas_mint.jpg"
import chuck70mint2 from "../../resources/images/chuck_70_seasonal_canvas_mint2.jpg"
import chuck70poster from "../../resources/images/chuck70_seasonal_canvas_poster.jpg"
import converseVideo from "../../resources/videos/converseVideo.mp4"

const RowBox = styled.div`
  display : flex;
  flex-direction : row;
`


const ProductBlock = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Grid item xs={12}
          >
            <VideoCard
              videoSrc={converseVideo}
              text="척 70 시즈널 캔버스 샴페인"
            />
          </Grid>
          <Grid item xs={12}>
            <RowBox>
              <Grid item xs={6}>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCard
                  image1={chuck70mint}
                  image2={chuck70mint2}
                  title1="BEST SELLER"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
            </RowBox>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <PosterCard
            image={chuck70poster}
            title1="CHUCK 70"
            title2="SEASONAL CANVAS"
            desc1="느긋한 여름 날의 태양을 떠오르게 하는"
            desc2="새로운 색상의 척 70을 만나보세요."
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductBlock;


