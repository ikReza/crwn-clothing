import React, { useEffect, useCallback, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header";
import Loading from "./components/loading/loading";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/userActions";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignIn = lazy(() => import("./components/signIn-and-signUp/signIn"));
const SignUp = lazy(() => import("./components/signIn-and-signUp/signUp"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(checkUserSession());
  }, [stableDispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={HomePage} />

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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
