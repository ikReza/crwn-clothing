import React, { useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignIn from "./components/signIn-and-signUp/signIn";
import SignUp from "./components/signIn-and-signUp/signUp";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    let unSubscribeFromAuth = null;

    unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          stableDispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      stableDispatch(setCurrentUser(userAuth));
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, [stableDispatch]);

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
