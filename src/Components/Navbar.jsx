import React from "react";
import reactLogo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  function activeLink({ isActive }) {
    return isActive
      ? "bg-blue-700 bg-opacity-60 rounded px-3 py-2"
      : "hover:bg-blue-700 hover:bg-opacity-20 rounded px-3 py-2";
  }

  return (
    <header>
      <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
        <Link to="/">
          {" "}
          <img src={reactLogo} alt="React Logo" />
        </Link>
        React : TODO List
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <ul className="hidden md:flex gap-x-6">
        <li>
          <NavLink to="/" className={activeLink}>
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={activeLink}>
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
