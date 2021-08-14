import { Redirect, Route, Switch } from "react-router-dom";
import { Products } from "../components/Products";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const AppRouter = () => (
  <Switch>
    <Route path={"/products"} component={Products} />
    <Route path={"/about"} component={About} />
    <Route path={"/Contact"} component={Contact} />
    <Redirect from={"/"} to="/products" />
  </Switch>
);
