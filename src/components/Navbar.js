import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <ul className="navbar-nav ml-5">
        <li className="nav-item">
          <NavLink className="nav-link"
            activeClassName="active"
            to="a#">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
            activeClassName="active"
            to="E#">
            New Question
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
            activeClassName="active"
            to="d#">
            Leader Board
          </NavLink>
        </li>
      </ul>
      <div className="m-auto opacity-7">
        <p className="my-0 d-inline-block p-2">Welcome user</p>
        <button className="btn align-baseline">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar