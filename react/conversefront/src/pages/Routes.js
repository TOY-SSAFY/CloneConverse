import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
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
      <PrivateRoute exact path="/BasketPage" component={BasketPage} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/wishlist" component={WishListPage} />
    </Router>
  );
};
