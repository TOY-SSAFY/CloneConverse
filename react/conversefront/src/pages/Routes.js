import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import {
  MainPage,
  ShoePage,
  Test,
  BasketPage,
  LoginPage,
  WishListPage,
  DetailPage,
  MyPage,
} from ".";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/category/shoes" component={ShoePage} />
        <PrivateRoute exact path="/BasketPage" component={BasketPage} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/wishlist" component={WishListPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
