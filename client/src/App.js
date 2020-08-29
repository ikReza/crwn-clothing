import React, { useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignIn from "./components/signIn-and-signUp/signIn";
import SignUp from "./components/signIn-and-signUp/signUp";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  const currentUser = useSelector(selectCurrentUser);

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
      </Switch>
    </div>
  );
};

export default App;
