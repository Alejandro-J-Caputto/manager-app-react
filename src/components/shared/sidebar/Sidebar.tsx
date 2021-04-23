import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <NavLink exact to="/manager-app/home/overview"
          activeClassName="router-link-active"
          className="sidebar-nav__item">
          <span>WORKSPACES</span>
        </NavLink>
        <NavLink to="/manager-app/home/search"
          activeClassName="router-link-active"
          className="sidebar-nav__item">
          <span>FILTER</span>
        </NavLink>
        <NavLink to="/manager-app/home/add"
          activeClassName="router-link-active"
          className="sidebar-nav__item">
          <span>ADD</span>
        </NavLink>
      </ul>

    </nav>
  )
}
