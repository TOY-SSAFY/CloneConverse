import React from "react";
import styled from "styled-components";
import { Grid, Box, Button } from "@material-ui/core";
import { ProductMenu, ProductDetail } from "../organisms";

const default_container = {
    margin: "0 auto",
    width: "80%",
};

const DetailContent = () => {
    return (
        <div style={default_container}>
            <ProductMenu></ProductMenu>
            <ProductDetail></ProductDetail>
        </div>
    );
  };
  
  export default DetailContent;