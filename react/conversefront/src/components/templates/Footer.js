import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import instagram_logo from "../../resources/images/facebook.png";
import facebook_logo from "../../resources/images/instagram.png";

const F_section = styled.div`
  width: 100%;
  margin: 50px auto 0;
  border: 0;
  padding: 0;
  border-top: 1px solid #e5e5e5;
  background-color: #000;
  box-sizing: border-box;
`;
const F_innersec01 = styled.div`
  background-color: #fff;
`;
const F_innersec02 = styled.div`
  margin: 0 auto;
  padding: 40px;
  max-width: 80%;
  position: relative;
  font-size: 12px;
  color: #9b9b9b;
  line-height: 20px;
  letter-spacing: -0.025em;
`;
const F_innersec02_left = styled.div`
  max-width: 705px;
  margin-left: -50px;
  padding: 0 10px 0 0;
  text-align: left;
`;

const F_innersec02_right = styled.div`
  max-width: 374px;
  text-align: left;
`;

const Bt_innerBox = styled.div`
  padding: 30px 0 30px 40px;
`;

const Bt_box_title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 1;
  letter-spacing: -0.025em;
  margin-bottom: 15px;
  text-align: left;
`;
const Bt_box_list = styled.ol`
  display: block;
  font-size: 12px;
  line-height: 1;
  padding: 6px 0;
  color: #757575;
  text-align: left;
`;
const Bt_box_ul = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;
const Bt_button = styled.a`
  text-decoration: none;
  border: 1px solid #e5e5e5;
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const Img = styled.img`
  height: 20px;
  margin: 15px auto;
`;

const Footer = () => {
  return (
    <>
      <F_section>
        <F_innersec01>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid
                item
                xs={2}
                md
                style={{
                  borderTop: "1px solid #e5e5e5",
                  borderRight: "1px solid #e5e5e5",
                }}
              >
                <Bt_innerBox>
                  <Bt_box_title>FOLLOW US</Bt_box_title>
                  <Bt_button>
                    <Img src={instagram_logo} alt="converse" />
                  </Bt_button>
                  <Bt_button>
                    <Img src={facebook_logo} alt="converse" />
                  </Bt_button>
                </Bt_innerBox>
              </Grid>
              <Grid
                item
                xs={2}
                md
                style={{
                  borderTop: "1px solid #e5e5e5",
                  borderRight: "1px solid #e5e5e5",
                }}
              >
                <Bt_innerBox>
                  <Bt_box_title>SUPPORT</Bt_box_title>
                  <Bt_box_ul>
                    <Bt_box_list>고객지원센터</Bt_box_list>
                    <Bt_box_list>1:1 문의</Bt_box_list>
                    <Bt_box_list>주문/배송 조회</Bt_box_list>
                  </Bt_box_ul>
                </Bt_innerBox>
              </Grid>
              <Grid
                item
                xs={2}
                md
                style={{
                  borderTop: "1px solid #e5e5e5",
                  borderRight: "1px solid #e5e5e5",
                }}
              >
                <Bt_innerBox>
                  <Bt_box_title>INFORMATION</Bt_box_title>
                  <Bt_box_ul>
                    <Bt_box_list>컨버스에 대하여</Bt_box_list>
                    <Bt_box_list>회원가입</Bt_box_list>
                    <Bt_box_list>매장안내</Bt_box_list>
                    <Bt_box_list>공지사항</Bt_box_list>
                  </Bt_box_ul>
                </Bt_innerBox>
              </Grid>
              <Grid
                item
                xs={2}
                md
                style={{
                  borderTop: "1px solid #e5e5e5",
                  borderRight: "1px solid #e5e5e5",
                }}
              >
                <Bt_innerBox>
                  <Bt_box_title>POLICY</Bt_box_title>
                  <Bt_box_ul>
                    <Bt_box_list>이용약관</Bt_box_list>
                    <Bt_box_list>개인정보처리방침</Bt_box_list>
                  </Bt_box_ul>
                </Bt_innerBox>
              </Grid>
              <Grid
                item
                xs={2}
                md
                style={{
                  borderTop: "1px solid #e5e5e5",
                }}
              >
                <Bt_innerBox>
                  <Bt_box_title>FAMILY SITES</Bt_box_title>
                  <Bt_box_ul>
                    <Bt_box_list>NIKE</Bt_box_list>
                    <Bt_box_list>Jordan</Bt_box_list>
                  </Bt_box_ul>
                </Bt_innerBox>
              </Grid>
            </Grid>
          </Container>
        </F_innersec01>
        <F_innersec02>
          <Grid container spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <F_innersec02_left>
                <span>
                  <a>(유)컨버스코리아 | </a>
                </span>
                <span>대표 주형준 | </span>
                <span>개인정보책임 주형준 | </span>
                <span>사업자등록번호 220-88-74818</span>
                <br />
                <span>통신판매업 신고번호 제2016-서울강남-00478호 | </span>
                <span>
                  <a>통신판매업자 신원정보 확인</a>
                </span>
                <br />
                <span>
                  주소 서울특별시 강남구 테헤란로 152 (역삼동) 강남파이낸스센터
                  32층
                </span>
                <br />
                <span>
                  고객상담팀: 080-987-0182 <div></div>(상담시간 월-금 : AM 09:00
                  - PM 05:30, 주말/공휴일 휴무) |
                </span>
                <span>
                  <a> conversekorea@converse.co.kr</a>
                  (24시간 접수 가능)
                </span>
                <div>2020 Converse Korea LLC. All Rights Reserved.</div>
              </F_innersec02_left>
            </Grid>
            <Grid item xs={4}>
              <F_innersec02_right>
                소비자피해 보증보험
                <br />
                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서
                가입한 구매안전서비스 소비자피해보증보험 서비스를 이용하실 수
                있습니다. <br />
                보증대상: 미배송, 반품/환불거부, 쇼핑몰 부도
                <br />
                <a>보증보험 가입사실 확인하기</a>
              </F_innersec02_right>
            </Grid>
          </Grid>
        </F_innersec02>
      </F_section>
    </>
  );
};

export default Footer;
