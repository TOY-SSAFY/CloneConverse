import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import arrow from "../../resources/images/rightarrow.png";

const Title = styled.div`
  padding: 0 2%;
  font-size: 36px;
  color: #000;
  font-weight: 700;
  line-height: 1;
  margin: 36px 0;
  text-align: left;
`;
const Inner_Box = styled.div`
  padding: 20px 20px 38px 60px;
  text-align: left;
  height: 0px;
`;
const Inner_Title = styled.a`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 700;
`;
const Small_Title = styled.a`
  font-size: 16px;
  line-height: 1.1;
  font-weight: 700;
  display: inline-bolck;
  align-items: center;
`;

const Img = styled.img`
  fill: currentColor;
  width: 27px;
  height: 24px;
  margin: -10px 13px 0 -40px;
`;
const SmallImg = styled.img`
  fill: currentColor;
  width: 18px;
  height: 14px;
  margin: 0 13px 0 -40px;
`;

const Box_border = {
  borderTop: "1px solid black",
  borderRight: "1px solid black",
  borderBottom: "1px solid black",
};
const Box_br_border = {
  borderRight: "1px solid black",
  borderBottom: "1px solid black",
};

const Explorer = () => {
  return (
    <>
      <Title>Explore Converse</Title>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={2} style={Box_border}>
          <Grid style={{ height: "100%" }}>
            <Inner_Box>
              <Img src={arrow} alt="push" />
              <Inner_Title>
                여성
                <br />
                전체보기
              </Inner_Title>
            </Inner_Box>
          </Grid>
        </Grid>
        <Grid item xs={2} style={Box_border}>
          <Grid style={{ height: "100%" }}>
            <Inner_Box>
              <Img src={arrow} alt="push" />
              <Inner_Title>
                남성
                <br />
                전체보기
              </Inner_Title>
            </Inner_Box>
          </Grid>
        </Grid>
        <Grid item xs={2} style={Box_border}>
          <Grid style={{ height: "100%" }}>
            <Inner_Box>
              <Img src={arrow} alt="push" />
              <Inner_Title>
                아동
                <br />
                전체보기
              </Inner_Title>
            </Inner_Box>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={Box_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>척 70</Small_Title>
              </Inner_Box>
            </Grid>
            <Grid item xs={12} style={Box_br_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>회원전용</Small_Title>
              </Inner_Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={Box_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>클래식 척</Small_Title>
              </Inner_Box>
            </Grid>
            <Grid item xs={12} style={Box_br_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>온라인 온리</Small_Title>
              </Inner_Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={Box_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>척테일러 올스타</Small_Title>
              </Inner_Box>
            </Grid>
            <Grid item xs={12} style={Box_br_border}>
              <Inner_Box>
                <SmallImg src={arrow} alt="push" />
                <Small_Title>빅사이즈</Small_Title>
              </Inner_Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Explorer;
