import React from "react";
// import Link from '@material-ui/core/Link';
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import icon_user from "../../resources/images/icon_userdefault.png";

// 마이페이지 좌측 메뉴
const MyPage_Side = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  background-color: #f4f4f4;
`;

const MyPage_Box = styled.div`
  width: 276px;
  position: relative;
  background-color: #f4f4f4;
`;
const MyPage_Side_fixed = styled.div`
  text-align: left;
  padding: 80px 36px 40px;
`;
const MyPage_Side_Profile = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 30px;
`;
const MyPage_Side_Title = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #000;
`;
const MyPage_Side_List = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;
const MyPage_Side_Ol = styled.ol`
  padding-inline-start: 0px;
  text-align: left;
  margin-top: 18px;
`;
const MyPage_Side_Logout = styled.div`
  margin-top: 40px;
`;
const Link = styled.a`
  display: block;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 1;
  letter-spacing: -0.025em;
  display: block;
  line-height: 1;
  font-size: 14px;
  color: #000;
  text-decoration: none;
`;
const Profile_Img = styled.img`
  fill: currentColor;
  display: inline-block;
  margin-right: 6px;
  padding: 7px;
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 50%;
  background-color: #000;
  margin-top: 10px;
`;
const MyPageBar = () => {
  return (
    <>
      <MyPage_Side>
        <Grid container spacing={0}>
          <Grid item xs={12} md>
            <MyPage_Box>
              <MyPage_Side_fixed>
                <MyPage_Side_Profile>
                  <Profile_Img src={icon_user}></Profile_Img>
                  <span
                    style={{ position: "absolute", left: "80px", top: "92px" }}
                  >
                    땡땡 고객님
                  </span>
                </MyPage_Side_Profile>
                <MyPage_Side_Title>쇼핑 정보</MyPage_Side_Title>
                <MyPage_Side_List>
                  <MyPage_Side_Ol>
                    <Link href="/">주문/배송 조회</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">교환/반품 조회</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">2021/5/11 이전 주문 조회</Link>
                  </MyPage_Side_Ol>
                </MyPage_Side_List>
                <MyPage_Side_Title>활동 정보</MyPage_Side_Title>
                <MyPage_Side_List>
                  <MyPage_Side_Ol>
                    <Link href="/">드로우 내역</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">프로모션 코드 조회</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">상품 리뷰</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/wishlist">위시리스트</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">1 : 1 문의</Link>
                  </MyPage_Side_Ol>
                </MyPage_Side_List>
                <MyPage_Side_Title>나의 정보</MyPage_Side_Title>
                <MyPage_Side_List>
                  <MyPage_Side_Ol>
                    <Link href="/">배송지 괸리</Link>
                  </MyPage_Side_Ol>
                  <MyPage_Side_Ol>
                    <Link href="/">회원정보 수정 및 탈퇴</Link>
                  </MyPage_Side_Ol>
                </MyPage_Side_List>
                <MyPage_Side_Logout>
                  <a
                    href="/"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#9b9b9b",
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      textDecoration: "none",
                    }}
                  >
                    로그아웃
                  </a>
                </MyPage_Side_Logout>
              </MyPage_Side_fixed>
            </MyPage_Box>
          </Grid>
        </Grid>
      </MyPage_Side>
    </>
  );
};

export default MyPageBar;
