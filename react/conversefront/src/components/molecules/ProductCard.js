import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Img = styled.img`
  width:100%;
  height:100%;
  cursor : pointer;
`
const RelativeBox = styled.div`
  position : relative;
  width:100%;
  height:100%;
`
const Heart = styled.div`
  position : absolute;
  top : 20px;
  left : 20px;
  z-index : 1;
  transition : 0.3s;
  cursor : pointer;

  :hover {
    transform: scale(1.3);
    transition : 0.3s;
  }
`
const TitleBox = styled.div`
  position : absolute;
  top : 20px;
  right : 20px;
  z-index : 1;
  font-weight : bold;
  font-size : 13px;
  `
const ProductInfoBox = styled.div`
  position : absolute;
  left : 20px;
  bottom : 20px;
  z-index : 1;
  font-size : 13px;
  text-align : left;
`
const NameBox = styled.span`
  cursor : pointer;

  :hover {
    text-decoration : underline;
  }
`

const ProductCard = ({
  image1,
  image2,
  title1,
  title2,
  name,
  price
}) => {
  const [imageSrc, setImageSrc] = useState(image1)

  const onImageHover = () => {
    setImageSrc(image2)
  }
  const onImageOut = () => {
    setImageSrc(image1)
  }

  return (
    <>
      <RelativeBox>
        <Img
          src={imageSrc} 
          onMouseOver={onImageHover}
          onMouseOut={onImageOut}
        />
        <Heart>
          <FavoriteBorderOutlinedIcon style={{ "fontSize": "20px" }}/>
        </Heart>
        <TitleBox>
          <span>{ title1 }</span><br/>
          <span>{ title2 ? title2 : "" }</span>
        </TitleBox>
        <ProductInfoBox>
          <NameBox>{name}</NameBox><br />
          <span>{price}</span>
        </ProductInfoBox>
      </RelativeBox>
    </>
  );
};

export default ProductCard;
