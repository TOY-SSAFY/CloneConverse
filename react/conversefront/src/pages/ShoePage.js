import React from "react";
import {ShoeContent} from "../components/templates";
import Container from "@material-ui/core/Container";

const ShoePage = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ flexDirection: "column" }}>
        <ShoeContent />
      </Container>
    </>
  );
};

export default ShoePage;
