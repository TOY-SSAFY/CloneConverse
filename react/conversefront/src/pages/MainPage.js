import React from "react";
import {
  ContentBlock,
  Explore,
  Footer,
  Header,
  Marketing,
  ShopByStyle,
} from "../components/templates";
import Container from "@material-ui/core/Container";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <ContentBlock />
        <ShopByStyle />
        <Explore />
        <Marketing />
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
