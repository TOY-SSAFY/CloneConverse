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
const TextBoxRight = styled.div`
  position: absolute;
  zIndex: 1;
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
  title3,
  desc1,
  desc2,
  buttonText,
  textStyle
}) => {
  return (
    <div>
      <RelativeBox>
        <Img src={image} />
        <TextBoxRight
          style={textStyle}
        >
          <TitleBox>
            {/* <span>{title1}<br />{title2 ? title2 : ""}<br />{ title3? title3 : "" }</span> */}
            <span>{title1}</span>
            {
              title2 ? <span><br />{title2}</span> : ""
            }
            {
              title3 ? <span><br />{title3}</span> : ""
            }
          </TitleBox>
          <DescBox>
            <span>{desc1}</span>
            {
              desc2 ? <span><br />{desc2}</span> : ""
            }
          </DescBox>
          <div style={{'padding':"15px 0"}}>
            <SquareButton
              text={buttonText}
            />
          </div>
        </TextBoxRight>
      </RelativeBox>
    </div>
  );
};

export default PosterCard;
