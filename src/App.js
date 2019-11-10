import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  state = {
    fighters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ fighters: users }));
  }

  render() {
    const { fighters, searchField } = this.state;
    const filterdFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search fighters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList fighters={filterdFighters}></CardList>
      </div>
    );
  }
}

export default App;
