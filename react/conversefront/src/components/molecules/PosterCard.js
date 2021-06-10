import React from "react";
import styled from "styled-components";
import { SquareButton } from ".";

const RelativeBox = styled.div`
  position : relative;
  width:100%;
  height:100%;
`
const Img = styled.img`
  width:100%;
  height:100%;
`
const TextBox = styled.div`
  position: absolute;
  zIndex: 1;
  right: 25px;
  top: 25px;
  text-align : right;
`
const TitleBox = styled.div`
  font-weight : bold;
  font-size : 40px;
`
const DescBox = styled.div`
  font-size : 15px;
  padding-top : 15px;
`

const PosterCard = ({
  image,
  title1,
  title2,
  desc1,
  desc2
}) => {
  return (
    <>
      <RelativeBox>
        <Img src={image} />
        <TextBox>
          <TitleBox>
            <span>{title1}<br/>{title2? title2 : ""}</span>
          </TitleBox>
          <DescBox>
            <span>{desc1}<br/>{desc2? desc2 : ""}</span>
          </DescBox>
          <div style={{'padding':"15px 0"}}>
            <SquareButton
              text="구매하기"
            />
          </div>
        </TextBox>
      </RelativeBox>
    </>
  );
};

export default PosterCard;
