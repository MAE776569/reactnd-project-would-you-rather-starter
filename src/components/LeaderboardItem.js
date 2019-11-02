import React from "react"

function LeaderboardItem({ user }) {

  const answered = Object.keys(user.answers).length
  const created = user.questions.length
  const total = answered + created

  return (
    <li className="mb-3">
      <div className="card p-3">
        <div className="row no-gutters">
          <div className="col-3 d-flex flex-wrap align-items-center">
            <img src={user.avatarURL}
              className="d-block m-auto question-avatar"
              alt={`${user.name}'s avatar`} />
          </div>
          <div className="col-6">
            <div className="card-body py-0">
              <h5 className="card-title">{user.name}</h5>
              <div className="row border-bottom p-1 leaderboard-info">
                <p className="col-8 mb-0">Answered questions</p>
                <p className="col-4 text-right mb-0">{answered}</p>
              </div>
              <div className="row p-1 leaderboard-info">
                <p className="col-8">Created questions</p>
                <p className="col-4 text-right">{created}</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card ml-2">
              <div className="card-header text-center">
                <h6>Score</h6>
              </div>
              <div className="card-body text-center">
                <span className="badge leaderboard-badge">{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default LeaderboardItem