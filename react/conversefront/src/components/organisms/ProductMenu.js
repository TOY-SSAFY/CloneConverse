import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import bigimg from "../../resources/images/bigImg.jpg";
import detail1 from "../../resources/images/detail1.jpg";
import detail2 from "../../resources/images/detail2.jpg";
import detail3 from "../../resources/images/detail3.jpg";
import detail4 from "../../resources/images/detail4.jpg";
import detail5 from "../../resources/images/detail5.jpg";
import detail6 from "../../resources/images/detail6.jpg";
import detail7 from "../../resources/images/detail7.jpg";
import detail8 from "../../resources/images/detail8.jpg";
import detail9 from "../../resources/images/detail9.jpg";
import detail10 from "../../resources/images/detail10.jpg";
import detail11 from "../../resources/images/detail11.jpg";
import detail12 from "../../resources/images/detail12.jpg";

const ListImg = styled.div`
box-sizing: border-box;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
flex-direction: column;
-webkit-box-flex: 0;
flex-grow: 0;
flex-shrink: 0;
flex-basis: 62%;
max-width: 100%;
}
`;
const Img = styled.img`
  width: 100%;
`;
const ImgListUL = styled.ul`
  margin: -40px 0 0 0;
  padding: 0 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  list-style: none;
`;
const ImgListLi = styled.li`
  max-width: calc(50% - 8px);
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`;

const ProductMenu = () => {
  return (
    <ListImg>
      <>
        <img src={bigimg}></img>
      </>
      <ImgListUL>
        <ImgListLi>
          <Img src={detail1}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail12}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail2}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail8}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail5}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail2}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail6}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail7}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail8}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail9}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail10}></Img>
        </ImgListLi>
        <ImgListLi>
          <Img src={detail11}></Img>
        </ImgListLi>
      </ImgListUL>
    </ListImg>
  );
};

export default ProductMenu;
