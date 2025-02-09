import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/menu">our menu</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/shop/salad">our shop</NavLink>{" "}
      </li>
      <li className="mr-8">
        <Link to='/dashboard'>
          <button className="btn">
            cart
            <div className="badge badge-sm badge-secondary">{cart.length} </div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button className="btn" onClick={logOut}>
            log out
          </button>
        </>
      ) : (
        <>
          <li>
            {" "}
            <NavLink to="/login">Log in </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/signUp">Sign Up </NavLink>{" "}
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar max-w-6xl  fixed z-30 bg-opacity-30 bg-[#15151580] text-white  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
