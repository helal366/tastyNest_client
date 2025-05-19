import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-amber-100 h-24 border-b border-gray-400">
      <div className="flex justify-between items-center padding h-full">
        <div>
          <span id="nav-logo">tastyNaste</span>
        </div>
        <div>
          <NavLink>Home</NavLink> &nbsp; &nbsp;
          <NavLink>All Recipes</NavLink> &nbsp; &nbsp;
          <NavLink>Add Recipe</NavLink> &nbsp; &nbsp;
          <NavLink>My Recipe</NavLink>
        </div>
        <div>
          <NavLink>Login</NavLink> &nbsp; &nbsp;
          <NavLink>Register</NavLink> &nbsp; &nbsp;
          
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
