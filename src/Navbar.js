import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menustyle">

        <NavLink exact activeClassName='active-class' to="/">About us</NavLink>
        <NavLink exact activeClassName='active-class' to="/User/PriyasinghA/engineer">User page</NavLink>
        <NavLink exact activeClassName='active-class' to="/search">Search here</NavLink>
        <NavLink exact activeClassName='active-class' to="/contact">Contact us</NavLink>
        <NavLink exact activeClassName='active-class' to="/Service">Service</NavLink>

      </div>
    </>
  );
}

export default Navbar;