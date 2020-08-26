import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignIn from "./components/signIn-and-signUp/signIn";
import SignUp from "./components/signIn-and-signUp/signUp";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
