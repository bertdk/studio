import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { aboutPath, contactPath, productsPath } from "../constants";

export const Menu: FunctionComponent<MenuProps> = () => {
  const items: MenuItem[] = [
    { name: "Products", url: productsPath },
    { name: "About me", url: aboutPath },
    { name: "Contact", url: contactPath },
  ];
  return (
    <nav className="md:grid md:grid-cols-5 md:gap-4 w-100 py-4 px-4 sm:px-8 bg-green-700 text-white">
      <div className="hidden md:col-span-2 md:flex md:flex-row">
        <img
          className="h-6 w-6"
          src="android-chrome-512x512.png"
          alt="App Logo"
        />
        <p className="ml-2"> Bert's Studio</p>
      </div>
      <div className="md:col-span-3 flex flex-row justify-between md:justify-end">
        {items.map(({ name, url }, i) => (
          <div key={i}>
            <NavLink
              className={`hover:bg-green-500 py-4 px-2 sm:px-8`}
              activeClassName={"bg-green-900"}
              to={url}
            >
              {name}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};
type MenuItem = {
  name: string;
  url: string;
};
type MenuProps = {};
Menu.propTypes = {};
