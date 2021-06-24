import React from "react";
import { NavBar, NoticeBar } from "../organisms";
import { withRouter } from "react-router-dom";

const Header = ({ location, history }) => {
  return (
    <>
      <NoticeBar />
      <NavBar />
    </>
  );
};

export default withRouter(Header);
