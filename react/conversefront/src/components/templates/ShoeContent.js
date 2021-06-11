import { Grid } from "@material-ui/core";
import React from "react";
import { CategoryBanner } from "../organisms";

const ShoeContent = () => {
  return (
    <>
      <CategoryBanner />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          asdf
        </Grid>
        <Grid item xs={8}>
          asdf
        </Grid>
        <Grid item xs={2}>
          asdf
        </Grid>
      </Grid>
    </>
  );
};

export default ShoeContent;
