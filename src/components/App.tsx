import { FunctionComponent } from "react";
import "../styles/index.scss";
import { Menu } from "./Menu";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "../routes/AppRouter";
export const App: FunctionComponent = () => (
  <BrowserRouter>
    <Menu />
    <div className="px-4 sm:px-8 text-black">
      <AppRouter />
    </div>
  </BrowserRouter>
);
