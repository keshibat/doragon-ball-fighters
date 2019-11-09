import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    fighters: [
      { name: "Goku", id: "acs1" },
      { name: "Vegeta", id: "acs2" },
      { name: "Piccolo", id: "acs3" }
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.fighters.map(fighter => (
          <h1 key={fighter.id}>{fighter.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
