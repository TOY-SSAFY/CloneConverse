import React from "react";
import styled from "styled-components";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import shoeBanner from "../../resources/images/shoe_banner.jpg"

const Img = styled.img`
  width : 100%;
`
const RelativeBox = styled.div`
  position : relative;
  width:100%;
  height:100%;
`
const TitleBox = styled.div`
  font-size : 40px;
  color : #000;
  line-height : 1;
  font-wiehgt: 900;
  position : absolute;
  top : 0;
  width : calc(100% - 40px);
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
`
const CategoryBanner = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{fontSize : "14px"}}>
        <Link color="inherit" href="/" onClick="">
          Home
        </Link>
        <Link color="textPrimary" href="/" onClick="">
          신발
        </Link>
      </Breadcrumbs>
      <RelativeBox>
        <Img src={shoeBanner} />
        <TitleBox>SHOES</TitleBox>
      </RelativeBox>
    </>
  );
};

export default CategoryBanner;
