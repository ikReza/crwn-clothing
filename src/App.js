import React, { useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignIn from "./components/signIn-and-signUp/signIn";
import SignUp from "./components/signIn-and-signUp/signUp";
import CheckoutPage from "./pages/checkout/checkout";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/userActions";

import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(checkUserSession());
  }, [stableDispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
        />
        <Route
          exact
          path="/checkout"
          render={() =>
            currentUser ? <CheckoutPage /> : <Redirect to="/signin" />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
