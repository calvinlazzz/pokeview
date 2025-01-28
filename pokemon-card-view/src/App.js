import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Squad from './components/Squad';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [squad, setSquad] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToSquad = (pokemon) => {
    if (squad.length < 6 && !squad.some(p => p.number === pokemon.number)) {
      setSquad([...squad, pokemon]);
    }
  };

  const removeFromSquad = (pokemon) => {
    setSquad(squad.filter(p => p.number !== pokemon.number));
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 id="title">Original 151 Pokémon</h1>

      </div>
      <Squad squad={squad} removeFromSquad={removeFromSquad} />

      <div className="battle-container">
        <button className="btn btn-primary" disabled={squad.length < 2}>Battle!</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>
      <PokemonList searchQuery={searchQuery} addToSquad={addToSquad} removeFromSquad={removeFromSquad} squad={squad} />

    </div>
  );
}

export default App;