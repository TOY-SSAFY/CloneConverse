import React from 'react';
// import Link from '@material-ui/core/Link';
import styled from 'styled-components';

// 마이페이지 좌측 메뉴
const MyPage_Side = styled.div`
  max-width: 100%;
  width: 276px;
  position: relative;
  background-color: #f4f4f4;
`;
const MyPage_Side_fixed = styled.div`
  padding: 80px 36px 40px;
`;
const MyPage_Side_Profile = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 30px;
  padding: ;
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
const MyPage_li = styled.li`
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
`;
const MyPageBar = () => {
  return (
    <>
      <MyPage_Side>
        <MyPage_Side_fixed>
          <MyPage_Side_Profile>
            <span>땡땡 </span> 고객님
          </MyPage_Side_Profile>
          <MyPage_Side_Title>쇼핑 정보</MyPage_Side_Title>
          <MyPage_Side_List>
            <ol style={{ textAlign: 'left' }}>
              <Link href='/'>주문/배송 조회</Link>
            </ol>
            <ol>
              <Link href='/'>교환/반품 조회</Link>
            </ol>
            <ol>
              <Link href='/'>2021/5/11 이전 주문 조회</Link>
            </ol>
          </MyPage_Side_List>
          <MyPage_Side_Title>활동 정보</MyPage_Side_Title>
          <MyPage_Side_List>
            <ol>
              <Link href='/'>드로우 내역</Link>
            </ol>
            <ol>
              <Link href='/'>프로모션 코드 조회</Link>
            </ol>
            <ol>
              <Link href='/'>상품 리뷰</Link>
            </ol>
            <ol>
              <Link href='/wishlist'>위시리스트</Link>
            </ol>
            <ol>
              <Link href='/'>1 : 1 문의</Link>
            </ol>
          </MyPage_Side_List>
          <MyPage_Side_Title>나의 정보</MyPage_Side_Title>
          <MyPage_Side_List>
            <ol>
              <Link href='/'>배송지 괸리</Link>
            </ol>
            <ol>
              <Link href='/'>회원정보 수정 및 탈퇴</Link>
            </ol>
          </MyPage_Side_List>
          <MyPage_Side_Logout>
            <Link href='/'>로그아웃</Link>
          </MyPage_Side_Logout>
        </MyPage_Side_fixed>
      </MyPage_Side>
    </>
  );
};

export default MyPageBar;
