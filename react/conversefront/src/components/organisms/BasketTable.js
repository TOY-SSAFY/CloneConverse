import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { ProductDetailCard } from "../molecules";
import store from "../../stores";
import { observer } from "mobx-react";

import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg";
import allstarmulefestival from "../../resources/images/chuck_taylor_allstar_mule_festival.jpg";

const Table = styled.table`
  border: 1px solid #e5e5e5;
  border-collapse: collapse;
`;
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
`;
const BasketTable = observer(() => {
  const { basketStore } = store();
  console.log(sessionStorage.getItem("token"));
  useEffect(async () => {
    await basketStore.getBasketList(
      "Bearer " + sessionStorage.getItem("token")
    );
    console.log("basketStore.basketList", basketStore.basketList);
  }, []);
  return (
    <>
      <Table>
        {basketStore.basketList &&
          basketStore.basketList.map((basket, index) => (
            <tr style={{ border: "1px solid #e5e5e5" }}>
              <ProductDetailCard
                image={"/assets/" + basket.item.imageName + "1.jpg"}
                title={basket.item.shoesName}
                color={basket.item.color}
                size={basket.item.size}
                quantity={basket.item.quantity}
                price={basket.item.price}
                id={basket.id}
                shoesid={basket.item.shoesId}
              />
            </tr>
          ))}
      </Table>
      <Clear>장바구니 비우기</Clear>
    </>
  );
});

export default BasketTable;
