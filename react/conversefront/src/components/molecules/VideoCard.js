import React from "react";
import styled from "styled-components";

const RelativeBox = styled.div`
  position : relative;
`
const TextBox = styled.span`
  
`
const HoverBox = styled.div`
  :hover {
    transition : 0.6s;
    filter : brightness(30%);
  }
`
const Video = styled.video`
  display : inline-block;
  width : 100%;
  height : 100%;
`

const VideoCard = ({
  videoSrc,
  text
}) => {
  return (
    <>
      <RelativeBox>
        <HoverBox>
          <video
            autoplay="autoplay" loop="loop" muted="" id="videoBanner" playsinline="" poster="#"
            style={{
              "display": "inline-block",
              "width": "100%",
              "height": "100%"
            }}
            >
            <source src={videoSrc} type="audio/mp4"/>
          </video>
        </HoverBox>
        <span style={{
          "position": "absolute",
          "zIndex": "1",
          "left": "25px",
          "top": "25px",
          "color": "white",
          "fontSize" :"14px"
        }}>
          {text}
        </span>
      </RelativeBox>
    </>
  );
};

export default VideoCard;
