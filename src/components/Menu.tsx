import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

export const Menu: FunctionComponent<MenuProps> = () => {
  const items: MenuItem[] = [
    { name: "Products", url: "/products" },
    { name: "About me", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <div className="w-100 flex flex-row justify-between py-4 px-4 sm:px-8 items-center bg-green-700 text-white">
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
  );
};
type MenuItem = {
  name: string;
  url: string;
};
type MenuProps = {};
Menu.propTypes = {};
