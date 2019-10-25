import React, { Component } from "react"
import logo from "../logo.png"
import { connect } from "react-redux"
import { handleGetUsers } from "../actions/users"

class Login extends Component {

  componentDidMount(){
    this.props.dispatch(handleGetUsers())
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-7 col-lg-5">
            <div className="card mt-5">
              <div className="card-header text-center">
                <h5>Welcome to the Would You Rather App!</h5>
                <p className="lead">Please sign in to continue</p>
              </div>
              <div className="card-body text-center">
                <img src={logo} alt="React logo" />
                <p className="card-text font-weight-bold text-info">Sign in</p>
                <form>
                  <select className="form-control" defaultValue="Select User">
                    <option value="Select User" disabled>
                      Select User...
                    </option>
                    {Object.keys(this.props.users).map(user => (
                      <option key={user} value={user}>
                        {this.props.users[user].name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-2"
                    value="Sign in"
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

function mapStateToProps(state){
  return { users: state.users }
}

export default connect(mapStateToProps)(Login)
