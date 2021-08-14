/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from "react";
import PropTypes from "prop-types";

export const Card: FunctionComponent<CardProps> = ({
  name,
  description,
  url,
  active = true,
}) => (
  <div
    className={`p-6 max-w-sm rounded-xl shadow-md flex space-x-4 ${
      active && "cursor-pointer"
    } bg-green-50 bg-opacity-40`}
    onClick={(e) => {
      e.preventDefault();
      if (active) window.open(url);
    }}
  >
    <div className="flex-shrink-0 flex items-center">
      <img
        className="h-12 w-12"
        src={`/logos/${active ? name : "WIP"}Logo.svg`}
        alt={`${name} Logo`}
      />
    </div>

    <div>
      <h2 className="text-xl font-medium text-black">{name}</h2>
      <p className="text-gray-500">{description}</p>
      <a className={`${active ? "link" : ""}`}>
        {active ? "Open app" : "Coming soon"}
      </a>
    </div>
  </div>
);

type CardProps = {
  name: string;
  description: string;
  url: string;
  active?: boolean;
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
