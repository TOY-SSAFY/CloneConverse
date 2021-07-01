import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Box, Button } from "@material-ui/core";
import { BasketTable } from "../organisms";
import store from "../../stores";
import { convertToPricingComma } from "../../utils/string";

const SummaryHead = styled.strong`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #757575;
`;

const SummaryRight = styled.span`
  margin-left: auto;
  word-break: break-all;
  float: right;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  color: #000;
`;
const Title = styled.div`
  text-align: center;
  font-size: 18px;
  color: #444;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 20px;
`;

const TotalSummary = styled.div`
  margin: 20px 0 0;
  padding: 20px;
  background: #f4f4f4;
  z-index: 1;
`;
const SummaryGroup = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e5e5e5;
  text-align: left;
`;
const OrderBtn = styled.a`
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

const BasketContent = () => {
  const { basketStore } = store();
  const [Price, setPrice] = useState();
  useEffect(async () => {
    const data = await basketStore.getBasketList(
      "Bearer " + sessionStorage.getItem("token")
    );
    console.log("basketStore.basketList", basketStore.basketList);
    console.log("리스트 크기", basketStore.basketList.length);
    let sum = 0;
    data.forEach((basket) => {
      sum += basket.item.price * basket.item.quantity;
    });
    setPrice(sum);
  }, []);

  return (
    <Grid container style={{ minHeight: "880px" }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div
          style={{
            float: "left",
            fontWeight: "600",
            fontSize: "20px",
            color: "#555",
            marginTop: "20px",
          }}
        >
          장바구니({basketStore.basketList.length})
        </div>
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <Box
              style={{
                textAlign: "center",
                backgroundColor: "#f4f4f4",
                fontSize: "14px",
                minHeight: "50px",
                lineHeight: "50px",
                margin: "20px 0",
              }}
            >
              신규 회원 가입 시, 즉시 사용 가능한 1만원 프로모션 코드를
              발급해드립니다.(일부 상품 할인 제외, 장바구니 5만원 이상 적용
              가능)
            </Box>
            <BasketTable />
          </Grid>
          <Grid item xs={4}>
            <TotalSummary>
              <Title>주문금액</Title>
              <SummaryGroup>
                <div style={{ padding: "0 0 18px" }}>
                  <div>
                    <SummaryHead>상품금액</SummaryHead>
                    <SummaryRight>
                      <span>{Price && convertToPricingComma(Price)}원</span>
                    </SummaryRight>
                  </div>
                </div>
                <div style={{ padding: "0 0 18px" }}>
                  <div>
                    <SummaryHead>배송비</SummaryHead>
                    <SummaryRight>
                      <span>0원</span>
                    </SummaryRight>
                  </div>
                </div>
                <div style={{ padding: "0 0 18px" }}>
                  <div>
                    <SummaryHead>총 할인금액</SummaryHead>
                    <SummaryRight>
                      <span>0원</span>
                    </SummaryRight>
                  </div>
                </div>
                <div>
                  <div style={{ margin: "20px 0 0" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      총 결제 금액
                    </span>
                    <SummaryRight>
                      <span style={{ fontSize: "18px", fontWeight: "600" }}>
                        {convertToPricingComma(basketStore.totalPrice)}원
                      </span>
                    </SummaryRight>
                  </div>
                </div>
              </SummaryGroup>
              <SummaryGroup>
                <OrderBtn>주문하기</OrderBtn>
              </SummaryGroup>
            </TotalSummary>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default BasketContent;
