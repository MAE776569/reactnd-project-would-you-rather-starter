import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import LoadingBar from "react-redux-loading-bar"
import Home from "./Home"
import QuestionDetail from "./QuestionDetail"
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar style={{ backgroundColor: "#138496" }} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/question/:id" component={QuestionDetail} />
      <Route path="/new" component={NewQuestion} />
      <Route path="/leaderboard" component={Leaderboard} />
    </BrowserRouter>
  );
}

export default App;
