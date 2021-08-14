import { Redirect, Route, Switch } from "react-router-dom";
import { Products } from "../components/Products";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import {
  aboutPath,
  basePath,
  contactPath,
  productsPath,
} from "../components/constants";

export const AppRouter = () => (
  <Switch>
    <Route path={productsPath} component={Products} />
    <Route path={aboutPath} component={About} />
    <Route path={contactPath} component={Contact} />
    <Redirect from={basePath} to={productsPath} />
  </Switch>
);
