import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import LoadingBar from "react-redux-loading-bar"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar style={{ backgroundColor: "#138496" }} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
