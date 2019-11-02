import React, { Component } from "react"
import { connect } from "react-redux"

class Leaderboard extends Component{
  render(){
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 p-0">
            
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Leaderboard)