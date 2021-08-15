import { lazy } from "react";
import { Route, Switch } from "react-router";

// pages
const Welcome = lazy(() => import("../pages/welcome/Welcome"));
const Checkout = lazy(() => import("../pages/checkout/Checkout"));
const Ingredients = lazy(() => import("../pages/ingredients/Ingredients"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/ingredients">
        <Ingredients />
      </Route>

      <Route path="/checkout">
        <Checkout />
      </Route>
    </Switch>
  );
};

export default Routes;
