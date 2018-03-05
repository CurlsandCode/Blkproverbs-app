import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
        <li className="HomeItem">
          <NavLink to="/" header>
            BlkProverbs
          </NavLink>
        </li>
		    <li>
          <NavLink to="/proverbs" name="Proverbs">
            {" "}
            All Proverbs
          </NavLink>
        </li>
        <li>
          <NavLink to="/proverb" name="Proverb">
            {" "}
            Random Proverb
          </NavLink>
        </li>
		    <li>
          <NavLink to="/addproverb" name="Add Proverb">
            {" "}
            Add Proverb
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" name="About">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;