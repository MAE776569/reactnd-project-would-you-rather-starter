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
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/new">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/leaderboard">
              Leader Board
            </NavLink>
          </li>
        </ul>
        {authedUser && (
          <div className="m-auto opacity-7">
            <p className="my-0 d-inline-block p-2">Hello, {authedUser.name}</p>
            <img
              src={authedUser.avatarURL}
              alt="User avatar"
              className="user-avatar"
            />
            <button
              className="btn align-baseline logout-btn p-2 ml-2"
              onClick={this.handleLogout}>
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
