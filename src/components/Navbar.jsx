import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../contexts-providers/AuthContext";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success(`${user?.email} has logged out successfully.`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <nav className="bg-amber-50 h-24 border-b border-gray-400 shadow-md">
      <div className="flex justify-between items-center padding h-full">
        <div className="flex">
          <div id="nav-logo" className="hidden  md:block">tastyNest</div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className=" md:hidden cursor-pointer">
              <GiHamburgerMenu size={28}/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-recipes">All Recipes</NavLink>
                

              </li>
              <li>
                <NavLink to="/add-recipe">Add Recipe</NavLink>
              </li>
              <li>
                <NavLink to="/my-recipe">My Recipe</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <NavLink to="/">Home</NavLink> &nbsp; &nbsp;
          <NavLink to="/all-recipes">All Recipes</NavLink> &nbsp; &nbsp;
          <NavLink to="/add-recipe">Add Recipe</NavLink> &nbsp; &nbsp;
          <NavLink to="/my-recipe">My Recipe</NavLink>
        </div>
        <div>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt={user?.displayName} src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user?.displayName} </a>
                  </li>
                  <li>
                    <a>{user?.email} </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex justify-center mt-5 bg-gray-600 text-white hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/auth/login">Login</NavLink> &nbsp; &nbsp;
              <NavLink to="/auth/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
