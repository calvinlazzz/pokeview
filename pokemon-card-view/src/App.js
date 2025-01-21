import React from 'react';
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    }
  return (
    <div className="App" >
      <div className = "title-container">
      
      <h1 id = "title" >Original 151 Pokémon</h1>
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
      <PokemonList searchQuery={searchQuery}/>
    </div>
  );
}

export default App;