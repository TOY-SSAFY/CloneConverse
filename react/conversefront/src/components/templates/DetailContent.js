import React from "react";
import styled from "styled-components";
import { Grid, Box, Button } from "@material-ui/core";
import { ProductMenu, ProductDetail } from "../organisms";

const DetailContent = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <ProductMenu></ProductMenu>
        </Grid>
        <Grid item xs={4}>
          <ProductDetail></ProductDetail>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailContent;
