import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import whiteConversePack from "../../resources/images/white_converse_pack.jpg"
import whiteConversePack2 from "../../resources/images/white_converse_pack2.jpg"
import whiteConverseSplatter from "../../resources/images/white_converse_splatter.jpg"
import whiteConverseSplatter2 from "../../resources/images/white_converse_splatter2.jpg"
import whiteConversePoster from "../../resources/images/white_converse_poster.jpg"
import converseVideo2 from "../../resources/videos/converseVideo2.mp4"

const RowBox = styled.div`
  display : flex;
  flex-direction : row;
`


const ProductBlock3 = () => {
  return (
    <>
      <Grid container spacing={0} style={{marginTop:"50px"}}>
        <Grid item xs={6}>
          <PosterCard
            image={whiteConversePoster}
            title1="WHITE CANVAS"
            desc1="올 여름, 나만이 담아낼 수 있는 스타일을"
            desc2="화이트 캔버스 컬렉션과 함께 표현해보세요."
            buttonText="더 알아보기"
            textStyle={{ left : "25px", top : "35%", textAlign:"left" }}
          />
        </Grid> 
        <Grid item xs={6}>
          <Grid item xs={12}>
            <VideoCard
              videoSrc={converseVideo2}
              text="더 알아보기"
              textStyle={{right:"30px", bottom:"30px", fontSize:"40px", fontWeight:"bold"}}
            />
          </Grid>
          <Grid item xs={12}>
            <RowBox>
              <Grid item xs={6}>
                <ProductCard
                  image1={whiteConversePack}
                  image2={whiteConversePack2}
                  title1="NEW ARRIVAL"
                  name="척 70 화이트 팩"
                  price="99,000원"
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCard
                  image1={whiteConverseSplatter}
                  image2={whiteConverseSplatter2}
                  title1="NEW ARRIVAL"
                  name="척 70 페인트 스플래터"
                  price="105,000원"
                />
              </Grid>
            </RowBox>
          </Grid>
        </Grid>
        
      </Grid>
    </>
  );
};

export default ProductBlock3;


