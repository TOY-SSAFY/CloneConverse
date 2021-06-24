import React from "react";
import Container from "@material-ui/core/Container";

import { Header, Footer, LoginContent } from "../components/templates";

const LoginPage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <Header />
        <LoginContent />
        <Footer />
      </Container>
    </>
  );
};

export default LoginPage;
