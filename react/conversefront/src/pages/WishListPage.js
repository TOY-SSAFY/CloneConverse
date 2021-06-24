import React from "react";
import { Header, Footer, WishListContent } from "../components/templates";
import Container from "@material-ui/core/Container";

const WishListPage = () => {
  return (
    <Container maxWidth="xl" style={{ flexDirection: "column" }}>
      <Header />
      <WishListContent />
      <Footer />
    </Container>
  );
};

export default WishListPage;
