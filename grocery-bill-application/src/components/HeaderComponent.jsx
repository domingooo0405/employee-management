import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <br></br>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <h1>Grocery Bill Application</h1>{" "}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
