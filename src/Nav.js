import React, { Component } from 'react'
import  { Link, NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ContactManager
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact activeClassName='active'exact className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li  className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/contacts">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
  }
}
