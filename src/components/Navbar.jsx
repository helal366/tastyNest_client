import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts-providers/AuthContext";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, userLogout, allRecipes, setSelectedCuisine } =
    useContext(AuthContext);
  // console.log(user);
  // console.log(allRecipes);
  const [cuisineTypes, setCuisineTypes] = useState(["All"]);
  useEffect(() => {
    const uniqueCuisineTypes = allRecipes.reduce(
      (acc, recipe) => {
        if (recipe?.cuisineType && !acc.includes(recipe.cuisineType)) {
          acc.push(recipe.cuisineType);
        }
        return acc;
      },
      ["All"]
    );
    setCuisineTypes(uniqueCuisineTypes);
  }, [allRecipes]);
  // console.log(cuisineTypes);
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
          <div id="nav-logo" className="hidden  md:block">
            tastyNest
          </div>

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" md:hidden cursor-pointer"
            >
              <GiHamburgerMenu size={28} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <NavLink to="/">Home</NavLink>
            </li>
            &nbsp; &nbsp;
            <li>
              <details>
                <summary>
                  <NavLink to="/all-recipes">All Recipes</NavLink>
                </summary>
                <ul className="p-2 z-10">
                  {cuisineTypes.map((cuisineType, i) => (
                    <li key={i} className="p-1 m-1 max-w-sm">
                      <NavLink
                      
                        to="/all-recipes"
                        onClick={() => setSelectedCuisine(cuisineType)}
                      >
                        {cuisineType}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            &nbsp; &nbsp;
            <li>
              <NavLink to="/add-recipe">Add Recipe</NavLink>
            </li>
            &nbsp; &nbsp;
            <li>
              <NavLink to="/my-recipe">My Recipe</NavLink>
            </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 items-center text-[16px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            &nbsp; &nbsp;
            <li>
              <details>
                <summary>
                  <NavLink to="/all-recipes">All Recipes</NavLink>
                </summary>
                <ul className="p-2 z-10">
                  {cuisineTypes.map((cuisineType, i) => (
                    <li key={i} className="p-1 m-1 max-w-sm">
                      <NavLink
                      
                        to="/all-recipes"
                        onClick={() => setSelectedCuisine(cuisineType)}
                      >
                        {cuisineType}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            &nbsp; &nbsp;
            <li>
              <NavLink to="/add-recipe">Add Recipe</NavLink>
            </li>
            &nbsp; &nbsp;
            <li>
              <NavLink to="/my-recipe">My Recipe</NavLink>
            </li>
          </ul>
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
          {/* theme controller */}
          {/* <div>
            <input
  type="checkbox"
  value="synthwave"
  className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
