import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  // TO DO GET ADMIN
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex  justify-center">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="adminHome">admin home</NavLink>
                </li>
                <li>
                  <NavLink to="addItems">add items</NavLink>
                </li>
                <li>
                  <NavLink to="manageItems">manage items</NavLink>
                </li>
                <li>
                  <NavLink to="manageBookings">manage bookings</NavLink>
                </li>
                <li>
                  <NavLink to="allUsers">all users </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="userHome">User Home</NavLink>
                </li>
                <li>
                  <NavLink to="reservation">reservation</NavLink>
                </li>
                <li>
                  <NavLink to="payment">payment history</NavLink>
                </li>
                <li>
                  <NavLink to="cart">my cart</NavLink>
                </li>
                <li>
                  <NavLink to="addReview">add review</NavLink>
                </li>
                <li>
                  <NavLink to="myBokking">my booking</NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to="/">home</NavLink>
              
            </li>
            <li>
              <NavLink to="">menu</NavLink>
            </li>
            <li>
              <NavLink to="">shop</NavLink>
            </li>
            <li>
              <NavLink to="">contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
