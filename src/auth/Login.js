import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <form onSubmit={this.Login}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  Login = event => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post("http://localhost:6500/api/login", this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.log("Axios Error: ", err);
      });
  };
}

export default Login;
