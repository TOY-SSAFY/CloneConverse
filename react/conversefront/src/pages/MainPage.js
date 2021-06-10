import React from "react";
import { ContentBlock, Explore, Footer, Header } from "../components/templates";
import Container from "@material-ui/core/Container";


const MainPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" style={{"top":"300px"}}>
        <ContentBlock  />
        <Explore/>
      </Container>
      <Footer/>
    </>
  );
};

export default MainPage;
