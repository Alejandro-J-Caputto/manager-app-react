import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p>adas</p>
      <div className="navbar__logo-box">
        <Link to="" className="navbar__link">
          <i className="navbar__logo fab fa-pied-piper-square"></i>
        </Link>
        <div className="workspace__name">
          <span>Sr. Patata</span>
        </div>
      </div>
      <div className="navbar__list">
        <NavLink className="active-link-nav" to="">
          <i className="navbar__list-item-icon--logout fas fa-home"></i>
        </NavLink>

        <NavLink className="active-link-nav" to="">
          <i className="navbar__list-item-icon--settings fas fa-edit"></i>
        </NavLink>

        <NavLink className="active-link-nav" to="">
          <img src="" alt="profile-photo"/>
        </NavLink>

        <NavLink className="active-link-nav" to="">
          <i className="navbar__list-item-icon--logout fas fa-sign-out-alt"></i>
        </NavLink>

      </div>

    </nav>
  )
}
