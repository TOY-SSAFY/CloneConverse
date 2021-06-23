import React from "react";
import { Header, Footer, BasketContent } from "../components/templates";
import Container from "@material-ui/core/Container";

const BasketPage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <Header />
        <BasketContent />
        <Footer />
      </Container>
    </>
  );
};

export default BasketPage;
