import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import instagram_logo from "../../resources/images/facebook.png";
import facebook_logo from "../../resources/images/instagram.png";
import canvas_logo from "../../resources/images/icon_canvas.png";
import change_logo from "../../resources/images/icon_change.png";
import shipping_logo from "../../resources/images/icon_shipping.png";

const M_section = styled.div`
  margin: 60px 0;
`;
const M_box_title = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
`;
const M_box_content = styled.div`
  margin: 8px auto 0;
  max-width: 200px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.025em;
  color: #757575;
  word-break: keep-all;
`;
const M_box_link = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding-bottom: 1px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #000;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

const Img = styled.img`
  fill: currentColor;
  height: 50px;
`;

const Box_border = {
  borderTop: "1px solid #e5e5e5",
  borderRight: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
};

const Marketing = () => {
  return (
    <M_section>
      <Grid
        container
        spacing={3}
        style={{
          padding: "40px 0",
        }}
      >
        <Grid item xs={3} md style={Box_border}>
          <Img src={shipping_logo}></Img>
          <M_box_title>무료배송</M_box_title>
          <M_box_content>5만원 이상 구매 시 무료배송</M_box_content>
        </Grid>
        <Grid item xs={3} md style={Box_border}>
          <Img src={change_logo}></Img>
          <M_box_title>교환/반품 서비스</M_box_title>
          <M_box_content>사이즈를 잘못 선택하셨나요?</M_box_content>
          <M_box_content>교환/반품 서비스에 대해 더 알아보세요.</M_box_content>
          <M_box_link>자세히 보기</M_box_link>
        </Grid>
        <Grid item xs={3} md style={Box_border}>
          <Img src={canvas_logo}></Img>
          <M_box_title>회원 전용 혜택</M_box_title>
          <M_box_content>
            신규 가입 축하 쿠폰, 드로우 응모 등 지금 회원 가입 하시고 더욱
            특별한 혜택을 누려보세요.
          </M_box_content>
          <M_box_link>회원 가입 하기</M_box_link>
        </Grid>
        <Grid item xs={3} md style={Box_border}>
          <Img
            src={instagram_logo}
            style={{
              height: "30px",
              marginBottom: "4px",
              marginTop: "10px",
            }}
          ></Img>
          <Img
            src={facebook_logo}
            style={{
              height: "30px",
              marginBottom: "4px",
              marginTop: "10px",
            }}
          ></Img>
          <M_box_title>Follow Us</M_box_title>
          <M_box_content>
            컨버스의 SNS 채널을 통해 신상품 정보 및 이벤트 등 새로운 소식을
            확인하세요.
          </M_box_content>
        </Grid>
      </Grid>
    </M_section>
  );
};

export default Marketing;
