import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg"
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg"

const ImgListUL = styled.ul`
    margin: -40px 0 0 0;
    padding: 0 68px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
`
const ImgListLi = styled.li`
    max-width: calc(50% - 8px);
    flex-basis: calc(50% - 8px);
    margin-bottom: 16px;
`

const ProductDetail = () => {
  return (
    <>
      <>
      
            <img src={chuck70pink}></img>
      </>
      <ImgListUL>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={chuck70pink}></img>
        </ImgListLi>
      </ImgListUL>
      
    </>
  );
};

export default ProductDetail;


