import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  width:100%;
  height:100%;
`

const ProductCard = ({
  image1,
  image2
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
      <div style={{"width":"100%", "height":"100%"}}>
        <Img
          src={imageSrc} 
          onMouseOver={onImageHover}
          onMouseOut={onImageOut}
        />
      </div>
    </>
  );
};

export default ProductCard;
