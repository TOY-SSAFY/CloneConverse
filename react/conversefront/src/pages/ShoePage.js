import React from "react";
import { Header, Footer, ShoeContent } from "../components/templates";
import Container from "@material-ui/core/Container";

const ShoePage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <Header />
        <ShoeContent />
        <Footer />
      </Container>
    </>
  );
};

export default ShoePage;
