import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import LeaderboardItem from "./LeaderboardItem"

class Leaderboard extends Component {
  render() {
    const { authedUser, users } = this.props
    if (!authedUser)
      return <Redirect to={{
        pathname: "/login",
        state: {
          referrer: "/leaderboard"
        }
      }} />

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-lg-7 p-0">
            <ul className="list-unstyled">
              {users.map(user => (
                <LeaderboardItem key={user.id} user={user} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const users = Object.keys(state.users)
    .map(user => state.users[user])
    .sort((a, b) => {
      let totalFirst = Object.keys(a.answers).length + a.questions.length
      let totalSecond = Object.keys(b.answers).length + b.questions.length
      return totalSecond - totalFirst
    })

  return {
    users,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
