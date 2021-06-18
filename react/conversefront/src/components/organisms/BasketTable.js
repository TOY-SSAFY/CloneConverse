import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { ProductDetailCard } from "../molecules";

import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg"
import allstarmulefestival from "../../resources/images/chuck_taylor_allstar_mule_festival.jpg"

const Table = styled.table`
  border: 1px solid #e5e5e5;
  border-collapse: collapse;
`
const Clear = styled.div`
  border: 1px solid #e5e5e5;
  font-size: 12px;
  font-weight: 600;
  line-height: 40px;
  width: 140px;
  height: 40px;
  float: right;
  margin-top: 40px;
  cursor: pointer;
`
const BasketTable = () => {
  return (
    <>
      <Table>
      <tr style={{border: "1px solid #e5e5e5"}}>
          <ProductDetailCard
            image={chuck70pink}
            title="척 70 시즈널 캔버스"
            color="핑크"
            size="230"
            quantity="1"
            price="99,000원"
          />
          </tr>
          <tr style={{border: "1px solid #e5e5e5"}}>
          <ProductDetailCard
            image={allstarmulefestival}
            title="척테일러 올스타 데인티 뮬 페스티벌"
            color="에그렛"
            size="225"
            quantity="2"
            price="75,000원"
          />
          </tr>
      </Table>
      <Clear>장바구니 비우기</Clear>
      </>
  );
};

export default BasketTable;


