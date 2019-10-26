import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import { LoadingBar } from "react-redux-loading-bar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar />
      <Login />
    </BrowserRouter>
  );
}

export default App;
