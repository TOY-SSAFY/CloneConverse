import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

import bigimg from "../../resources/images/bigImg.jpg"
import detail1 from "../../resources/images/detail1.jpg"
import detail2 from "../../resources/images/detail2.jpg"
import detail3 from "../../resources/images/detail3.jpg"
import detail4 from "../../resources/images/detail4.jpg"
import detail5 from "../../resources/images/detail5.jpg"
import detail6 from "../../resources/images/detail6.jpg"
import detail7 from "../../resources/images/detail7.jpg"
import detail8 from "../../resources/images/detail8.jpg"
import detail9 from "../../resources/images/detail9.jpg"
import detail10 from "../../resources/images/detail10.jpg"
import detail11 from "../../resources/images/detail11.jpg"
import detail12 from "../../resources/images/detail12.jpg"


const ImgListUL = styled.ul`
    margin: -40px 0 0 0;
    padding: 0 68px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    list-style: none;
`
const ImgListLi = styled.li`
    max-width: calc(50% - 8px);
    flex-basis: calc(50% - 8px);
    margin-bottom: 16px;
    
`

const ProductMenu = () => {
  return (
    <>
      <>
       <img src={bigimg}></img>
      </>
      <ImgListUL>
        <ImgListLi>
            <img src={detail1}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail12}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail2}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail8}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail5}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail2}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail6}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail7}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail8}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail9}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail10}></img>
        </ImgListLi>
        <ImgListLi>
            <img src={detail11}></img>
        </ImgListLi>
      </ImgListUL>
      
    </>
  );
};

export default ProductMenu;


