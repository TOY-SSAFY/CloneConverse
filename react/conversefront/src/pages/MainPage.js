import React from "react";
import {MainContent} from "../components/templates";
import Container from "@material-ui/core/Container";

const MainPage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <MainContent />
      </Container>
    </>
  );
};

export default MainPage;
