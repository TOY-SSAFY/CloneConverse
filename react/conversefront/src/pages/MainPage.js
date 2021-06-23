import React from "react";
import { Header, Footer, MainContent } from "../components/templates";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";

const MainPage = ({ history }) => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <Header history />
        <MainContent />
        <Footer />
      </Container>
    </>
  );
};

export default withRouter(MainPage);
