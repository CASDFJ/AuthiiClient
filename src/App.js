import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/Login.js";
import Users from "./users/Users.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <button onClick={this.logout}>Logout</button>
          </div>
        </header>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  logout = event => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };
}

export default withRouter(App);
