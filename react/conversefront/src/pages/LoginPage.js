import React from "react";
import Container from "@material-ui/core/Container";

import { LoginContent } from "../components/templates";

const LoginPage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <LoginContent></LoginContent>
      </Container>
    </>
  );
};

export default LoginPage;
