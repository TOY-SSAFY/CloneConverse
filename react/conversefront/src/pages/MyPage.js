import React from "react";
import { Header, Footer, MyPageContent } from "../components/templates";
import Container from "@material-ui/core/Container";

const MyPage = () => {
  return (
    <Container maxWidth="xl" style={{ flexDirection: "column" }}>
      <Header />
      <MyPageContent />
      <Footer />
    </Container>
  );
};

export default MyPage;
