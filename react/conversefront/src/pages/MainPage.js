import React from "react";
import {
  ContentBlock,
  Footer,
  Header,
} from "../components/templates";
import Container from "@material-ui/core/Container";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <ContentBlock />
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
