import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  MainPage,
  ShoePage,
  Test,
  BasketPage,
  LoginPage,
  WishListPage,
} from ".";

export default () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/category/shoes" component={ShoePage} />
      <Route exact path="/BasketPage" component={BasketPage} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/wishlist" component={WishListPage} />
    </Router>
  );
};
