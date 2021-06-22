import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { MyPageBar } from '../organisms';
import chuck70pink from '../../resources/images/chuck_70_seasonal_canvas_pink.jpg';
import chuck70pink2 from '../../resources/images/chuck_70_seasonal_canvas_pink2.jpg';
import { ProductCard } from '../molecules';
// 마이페이지 좌측 메뉴
const li = styled.li`
  margin-top: 18px;
`;

const Mypage_Title = styled.div`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #000;
`;
const WishListContent = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <MyPageBar></MyPageBar>
        </Grid>
        <Grid item xs={10}>
          <div class='mypage_content'>
            <Mypage_Title>위시리스트(4)</Mypage_Title>
            <div class='myshop-likeitprdpackage'>
              <div class='myshop-likeproductlist'>
                <div id='mcontent'>
                  <Grid container spacing={3}>
                    <Grid item xs={3} md>
                      <ProductCard image1={chuck70pink} image2={chuck70pink2} />
                    </Grid>
                    <Grid item xs={3} md>
                      <ProductCard image1={chuck70pink} image2={chuck70pink2} />
                    </Grid>
                    <Grid item xs={3} md>
                      <ProductCard image1={chuck70pink} image2={chuck70pink2} />
                    </Grid>
                    <Grid item xs={3} md>
                      <ProductCard image1={chuck70pink} image2={chuck70pink2} />
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div class='myshop-paginate'>
                <a href='#none' class='btnPrev'>
                  svg
                </a>
                <ol>
                  <li class='xans-record-'>
                    <a href='?page=1' class='this'>
                      1
                    </a>
                  </li>
                </ol>
                <a href='#none' class='btnNext'>
                  svg
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WishListContent;
