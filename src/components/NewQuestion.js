import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class NewQuestion extends Component{
  render(){
    if(!this.props.authedUser) return <Redirect to="/login" />

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 p-0">
            <div className="card">
              <div className="card-header text-center">
                <h3>Create New Question</h3>
              </div>
              <div className="card-body">
                <div className="card-title">
                  <p>Complete the question:</p>
                  <h5>Would you rather...</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const authedUser = state.authedUser
  return { authedUser }
}

export default connect(mapStateToProps)(NewQuestion)