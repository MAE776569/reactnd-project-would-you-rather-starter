import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router-dom"
import { handleAddQuestion } from "../actions/questions"

class NewQuestion extends Component{
  state = {
    optionOne: "",
    optionTwo: ""
  }

  componentDidMount(){
    if(this.props.authedUser)
      this.input.focus()
  }

  isDisabled = () => {
    return !(this.state.optionOne && this.state.optionTwo)
  }

  handleChange = (e, option) => {
    if(option)
      this.setState({ optionOne: e.target.value })
    else
      this.setState({ optionTwo: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { authedUser, saveQuestion, history } = this.props
    saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
    history.push("/")
  }

  render(){
    if(!this.props.authedUser)
      return <Redirect to={{
        pathname: "/login",
        state: {
          referrer: "/add"
        }
      }} />

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
                <form onSubmit={this.handleSubmit}>
                  <input type="text" className="form-control mb-3"
                    placeholder="Enter option one text here"
                    value={this.state.optionOne}
                    onChange={(e) => this.handleChange(e, true)}
                    ref={(input) => this.input = input} />
                  <p className="text-center font-weight-bold">OR</p>
                  <input type="text" className="form-control mb-3"
                    placeholder="Enter option two text here"
                    value={this.state.optionTwo}
                    onChange={(e) => this.handleChange(e, false)} />
                  <input type="submit" value="Submit" 
                    className="btn btn-block btn-info"
                    disabled={this.isDisabled()} />
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
  const authedUser = state.authedUser
  return { authedUser }
}

function mapDispatchToProps(dispatch){
  return {
    saveQuestion: (...args) => dispatch(handleAddQuestion(...args))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))