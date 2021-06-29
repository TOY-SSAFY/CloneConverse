import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg";
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg";
import { ProductCard } from "../molecules";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { MyPageBar } from "../organisms";

const MyPageContent = () => {
  return (
    <>
      <MyPageBar></MyPageBar>마이페이지
    </>
  );
};

export default MyPageContent;
