import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Leaderboard extends Component{
  render(){
    const { authedUser, users } = this.props
    if(!authedUser)
      return <Redirect to="/login" />

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 p-0">
            <ul className="list-unstyled">
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const users = Object.keys(state.users).map(user => state.users[user])
  return {
    users,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)