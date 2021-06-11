import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import muleFestival from "../../resources/images/chuck_taylor_allstar_mule_festival.jpg"
import muleFestival2 from "../../resources/images/chuck_taylor_allstar_mule_festival2.jpg"
import muleFestivalPink from "../../resources/images/chuck_taylor_allstar_mule_festival_pink.jpg"
import muleFestivalPink2 from "../../resources/images/chuck_taylor_allstar_mule_festival_pink2.jpg"
import muleCroche from "../../resources/images/chuck_taylor_allstar_mule_croche.jpg"
import muleCroche2 from "../../resources/images/chuck_taylor_allstar_mule_croche2.jpg"
import muleCrochePink from "../../resources/images/chuck_taylor_allstar_mule_croche_pink.jpg"
import muleCrochePink2 from "../../resources/images/chuck_taylor_allstar_mule_croche_pink2.jpg"
import muleCollectionPoster from "../../resources/images/mule_collection_poster.jpg"

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
            image={muleCollectionPoster}
            title1="MULE COLLECTION"
            desc1="가벼운 소재, 오픈 힐 디자인으로"
            desc2="여름을 위한 스타일이 완벽한 조화를 이룹니다."
            buttonText="구매하기"
            textStyle={{ left : "25px", top : "25px", textAlign:"left" }}
          />
        </Grid> 
        <Grid item xs={6}>
          <Grid item xs={12}>
            <RowBox>
              <Grid item xs={6}>
                <ProductCard
                  image1={muleFestival}
                  image2={muleFestival2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척테일러 올스타 데인티 뮬 페스티벌"
                  price="75,000원"
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCard
                  image1={muleFestivalPink}
                  image2={muleFestivalPink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척테일러 올스타 데인티 뮬 페스티벌"
                  price="75,000원"
                />
              </Grid>
            </RowBox>
          </Grid>
          <Grid item xs={12}>
            <RowBox>
              <Grid item xs={6}>
                <ProductCard
                  image1={muleCroche}
                  image2={muleCroche2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  title3="ONLINE ONLY"
                  name="척테일러 올스타 데인티 뮬 라피아 크로셰"
                  price="79,000원"
                  membersOnly={true}
                />
              </Grid>
              <Grid item xs={6}>
                <ProductCard
                  image1={muleCrochePink}
                  image2={muleCrochePink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  title3="ONLINE ONLY"
                  name="척테일러 올스타 데인티 뮬 라피아 크로셰"
                  price="79,000원"
                  membersOnly={true}
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


