import React from "react";
import {
  ContentBlock,
  Explore,
  Footer,
  Header,
  Marketing,
} from "../components/templates";
import Container from "@material-ui/core/Container";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <ContentBlock />
        <Explore />
        <Marketing />
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
