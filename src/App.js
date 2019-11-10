import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  state = { fighters: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ fighters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.fighters.map(fighter => (
            <h1 key={fighter.id}>{fighter.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
