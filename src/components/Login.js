import React, { Component } from "react"
import logo from "../logo.png"
import { connect } from "react-redux"
import { handleGetUsers } from "../actions/users"
import styled from "styled-components"
import { authenticateUser } from "../actions/authedUser"

class Login extends Component {

  state = {
    user: null
  }

  componentDidMount(){
    this.props.dispatch(handleGetUsers())
  }

  handleChangeUser = (e) =>{
    this.setState({
      user: e.target.value
    })
  }

  isDisabled = () => !Object.keys(this.props.users).includes(this.state.user)

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(authenticateUser(this.state.user))
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-7 col-lg-5">
            <div className="card mt-5">
              <div className="card-header text-center">
                <h5 className="header-welcome">Welcome to the Would You Rather App!</h5>
                <p className="lead header-lead">Please sign in to continue</p>
              </div>
              <div className="card-body text-center">
                <img src={logo} alt="React logo" />
                <p className="card-text font-weight-bold text-info">Sign in</p>
                <form onSubmit={this.handleSubmit}>
                  <select className="form-control"
                    defaultValue="Select User"
                    onChange={this.handleChangeUser}>
                    <option value="Select User" disabled>
                      Select User...
                    </option>
                    {Object.keys(this.props.users).map(user => (
                      <UserOption key={user} value={user}
                        user={this.props.users[user]}>
                        {this.props.users[user].name}
                      </UserOption>
                    ))}
                  </select>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-2"
                    value="Sign in"
                    disabled={this.isDisabled()}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const UserOption = styled.option`
  ::before{
    background-image: url('${props => props.user.avatarURL}');
  }
`

function mapStateToProps(state){
  return { users: state.users }
}

export default connect(mapStateToProps)(Login)
