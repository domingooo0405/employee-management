import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import UserService from "../service/UserService";

class LoginUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
    this.login = this.login.bind(this);
  }
  login = (event) => {
    event.preventDefault();

    UserService.getUser().then((response) => {
      let user = response.data;
      let Username = document.getElementById("userN").value;
      let Password = document.getElementById("passW").value;
      let UserN = document.querySelector("#userN");
      let PassW = document.querySelector("#passW");
      let Message = document.querySelector("#msg");

      for (let foundUser of user) {
        if (UserN.value.length === 0 || PassW.value.length === 0) {
          Message.innerHTML =
            "<h4 class='error'> Please complete details!<h4/>";

          setTimeout(() => document.querySelector(".error").remove(), 3000);
        } else {
          if (
            Username === foundUser.userName &&
            Password === foundUser.password
          ) {
            alert("Login Successful")
            this.props.history.push("/items");
          } else {
            Message.innerHTML =
              "<h4 class='error'> Username or Password is incorrect!<h4/>";

            setTimeout(() => document.querySelector(".error").remove(), 3000);
          }
        }
      }
    });
  };

  render() {
    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <div id="msg" className="login-message"></div>
              <br></br>
              <input
                type="text"
                placeholder="username"
                id="userN"
                name="userName"
              />
              <input
                type="password"
                placeholder="password"
                id="passW"
                name="password"
              />
              <button className="button-36" onClick={this.login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUserComponent;
