import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
import { setSearchField } from "./action";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
     onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  state = {
    fighters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ fighters: users }));
  }

  render() {
    const { fighters } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterdFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Doragon Ball Fighters</h1>
        <SearchBox
          placeholder="search fighters"
          handleChange={onSearchChange}
        />

        <CardList fighters={filterdFighters}></CardList>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
