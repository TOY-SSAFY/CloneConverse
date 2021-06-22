import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { MyPageBar } from "../organisms";
import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg";
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg";
import { ProductCard } from "../molecules";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

// 마이페이지 좌측 메뉴
const li = styled.li`
  margin-top: 18px;
`;

const Mypage_Title = styled.div`
  margin-bottom: 70px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #000;
  text-align: left;
`;
const Mypage_Content_Box = styled.div`
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  padding: 80px 50px 100px;
`;
const Mypage_Content_Button = styled.button`
  width: 110px;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  float: left;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-transition: color 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    border-color 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    background-color 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
  transition: color 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    border-color 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    background-color 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
`;
const Mypage_Product_Box = styled.div`
  height: 85%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const WishListContent = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={2}>
          <MyPageBar></MyPageBar>
        </Grid>
        <Grid item xs={10}>
          <Mypage_Content_Box>
            <Mypage_Title>위시리스트(4)</Mypage_Title>
            <div class="myshop-likeitprdpackage">
              <div class="myshop-likeproductlist">
                <div id="mcontent">
                  <Grid container spacing={6}>
                    <Grid item xs={3} md>
                      <Mypage_Product_Box>
                        <ProductCard
                          image1={chuck70pink}
                          image2={chuck70pink2}
                        />
                      </Mypage_Product_Box>
                      <Mypage_Content_Button>
                        장바구니 담기
                      </Mypage_Content_Button>
                    </Grid>
                    <Grid item xs={3} md>
                      <Mypage_Product_Box>
                        <ProductCard
                          image1={chuck70pink}
                          image2={chuck70pink2}
                        />
                      </Mypage_Product_Box>
                      <Mypage_Content_Button>
                        장바구니 담기
                      </Mypage_Content_Button>
                    </Grid>
                    <Grid item xs={3} md>
                      <Mypage_Product_Box>
                        <ProductCard
                          image1={chuck70pink}
                          image2={chuck70pink2}
                        />
                      </Mypage_Product_Box>
                      <Mypage_Content_Button>
                        장바구니 담기
                      </Mypage_Content_Button>
                    </Grid>
                    <Grid item xs={3} md>
                      <Mypage_Product_Box>
                        <ProductCard
                          image1={chuck70pink}
                          image2={chuck70pink2}
                        />
                      </Mypage_Product_Box>
                      <Mypage_Content_Button>
                        장바구니 담기
                      </Mypage_Content_Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <Grid container justify="center" style={{ marginTop: "60px" }}>
              <div className={classes.root}>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  color="dark"
                />
              </div>
            </Grid>
          </Mypage_Content_Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WishListContent;
