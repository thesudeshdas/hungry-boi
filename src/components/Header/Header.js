import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-6">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604"
        alt="Brand logo"
        className="w-24 h-24"
      />

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
