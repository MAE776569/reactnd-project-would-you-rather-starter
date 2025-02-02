import React, { Component } from "react"
import logo from "../logo.png"
import { connect } from "react-redux"
import { handleGetUsers } from "../actions/users"
import { handleGetQuestions } from "../actions/questions"
import { authenticateUser } from "../actions/authedUser"
import { Dropdown } from "react-bootstrap"
import { withRouter, Redirect } from "react-router-dom"

class Login extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    const { getUsers, getQuestions } = this.props
    getUsers()
    getQuestions()
  }

  handleChangeUser = user => {
    this.setState({ user })
  }

  isDisabled = () => !Object.keys(this.props.users).includes(this.state.user)

  handleSubmit = () => {
    const { authenticateUser, history, location } = this.props
    const redirectTo = location.state ? location.state.referrer : "/"
    authenticateUser(this.state.user)
    history.push(redirectTo)
  }

  render() {
    const { users, authedUser } = this.props

    if(authedUser)
      return <Redirect to="/" />

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-7 col-lg-5">
            <div className="card">
              <div className="card-header text-center">
                <h5 className="header-welcome">
                  Welcome to the Would You Rather App!
                </h5>
                <p className="lead header-lead">Please sign in to continue</p>
              </div>
              <div className="card-body text-center">
                <img src={logo} alt="React logo" />
                <p className="card-text font-weight-bold text-info">Sign in</p>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="d-block" id="dropdown-basic">
                      {this.state.user ? (
                        <>
                          <img
                            src={this.props.users[this.state.user].avatarURL}
                            alt={this.state.user}
                            className="user-option-avatar"
                          />
                          <span className="ml-1">
                            {this.props.users[this.state.user].name}
                          </span>
                        </>
                      ) : (
                        "Select User..."
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {Object.keys(users).map(user => (
                        <Dropdown.Item
                          key={user}
                          onClick={() => this.handleChangeUser(user)}>
                          <img
                            src={users[user].avatarURL}
                            alt={user}
                            className="user-option-avatar"/>
                          <span className="ml-1">{users[user].name}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-info btn-block mt-2"
                    value="Sign In"
                    disabled={this.isDisabled()}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    authedUser: state.authedUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    getUsers: () => dispatch(handleGetUsers()),
    authenticateUser: (...args) => dispatch(authenticateUser(...args)),
    getQuestions: () => dispatch(handleGetQuestions())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
