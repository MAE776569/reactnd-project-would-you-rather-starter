import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "../actions/authedUser"
import { withRouter } from "react-router-dom"

class Navbar extends Component {

  handleLogout = () => {
    this.props.dispatch(logoutUser())
    this.props.history.push("/")
  }

  render() {
    const { authedUser } = this.props

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav ml-5">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="a#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="E#">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="d#">
              Leader Board
            </NavLink>
          </li>
        </ul>
        {authedUser && (
          <div className="m-auto opacity-7">
            <img
              src={authedUser.avatarURL}
              alt="User avatar"
              className="user-avatar"
            />
            <p className="my-0 d-inline-block p-2">Welcome {authedUser.name}</p>
            <button
              className="btn align-baseline logout-btn p-2"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  const authedUser = state.authedUser ? state.users[state.authedUser] : null
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
