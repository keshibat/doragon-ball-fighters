import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const App = () =>  {
  const [fighters, setFighters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setFighters({ fighters: users }));
  }, [])



  const handleChange = e => {
    setSearchField({ searchField: e.target.value });
  };

    const filterdFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Doragon Ball Fighters</h1>
        <SearchBox
          placeholder="search fighters"
          handleChange={handleChange}
        />

        <CardList fighters={filterdFighters}></CardList>
      </div>
    );
}
export default App;
