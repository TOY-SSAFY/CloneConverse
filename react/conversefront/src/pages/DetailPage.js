import React from "react";
import { Header, Footer, DetailContent } from "../components/templates";
import Container from "@material-ui/core/Container";

const DetailPage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <Header />
        <DetailContent />
        <Footer />
      </Container>
    </>
  );
};

export default DetailPage;
