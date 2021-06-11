import React from "react";
import { PosterCard } from "../molecules";
import { PosterBlock, ProductBlock, ProductBlock2, ProductBlock3, ShopByStyle, Explore, Marketing } from "../organisms";
import daintyPoster from "../../resources/images/chuck_taylor_allstar_dainty_poster.jpg"
import hikePoster from "../../resources/images/run_star_hike_poster.jpg"
import pridePoster from "../../resources/images/pride_collection_poster.jpg"

const ContentBlock = () => {
  return (
    <>
      <ProductBlock />
      <ShopByStyle />
      <PosterBlock
        image={hikePoster}
        title1="RUN STAR HIKE"
        desc1="척테일러 올스타의 과감하고 미래지향적인 재해석"
        desc2="런스타 하이크가 혁신적이고 새로운 스타일을 제시합니다."
        buttonText="2021.06.10 10AM 재입고 예정"
        textStyle={{ left : "30px", top : "30px", textAlign:"left" }}
      />
      <PosterBlock
        image={daintyPoster}
        title1="CHUCK TAYLOR"
        title2="ALL STAR"
        title3="DAINTY"
        desc1="슬림한 실루엣과 미니멀한 디자인의"
        desc2="척테일러 올스타 데인티 베이직 캔버스입니다."
        buttonText="구매하기"
        textStyle={{ left : "40%", top : "35%", textAlign:"center" }}
      />
      <ProductBlock2 />
      <ProductBlock3 />
      <PosterBlock
        image={pridePoster}
        title1="PRIDE COLLECTION"
        desc1="올 여름, 진정한 자기표현의 가치를 찾아낸 기쁨을 축하하며"
        desc2="컨버스 프라이드 컬렉션을 출시합니다."
        buttonText="더 알아보기"
        textStyle={{ left : "30px", bottom : "30px", textAlign:"left" }}
      />
      <Explore />
      <Marketing />
    </>
  );
};

export default ContentBlock;
