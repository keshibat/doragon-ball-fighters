import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
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

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { fighters, searchField } = this.state;
    const filterdFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Doragon Ball Fighters</h1>
        <SearchBox
          placeholder="search fighters"
          handleChange={this.handleChange}
        />

        <CardList fighters={filterdFighters}></CardList>
      </div>
    );
  }
}

export default App;
