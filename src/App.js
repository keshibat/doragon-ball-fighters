import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
import { setSearchField, requestFighters } from "./action";

const mapStateToProps = state => {
  return {
    searchField: state.searchFighters.searchField,
    fighters: state.requestFighters.fighters,
    isPending: state.requestFighters.isPending,
    error: state.requestFighters.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFighters: () => dispatch(requestFighters())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestFighters();
  }

  render() {
    const { searchField, onSearchChange, fighters, isPending } = this.props;
    const filterdFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ?
    <h1>loading</h1> :
    (
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
