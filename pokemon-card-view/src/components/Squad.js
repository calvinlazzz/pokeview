import React from 'react';
import PokemonCard from './PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Squad.css';


const Squad = ({ squad, removeFromSquad }) => {
    const handleRemoveClick = ( name, image, types, type, number) => {
        removeFromSquad({  name, image, types, type, number});
    };
    return (
        <div className="container mt-4">
            <h2>Your Squad</h2>
            <div className="row">
                {squad.map((poke, index) => (
                    <div className="col-md-2 mb-4" key={index}>
                    <div className={`squad-pokemon ${poke.type}`}>
                        <button className="remove-button" onClick={() => handleRemoveClick(poke.name, poke.image, poke.types, poke.type, poke.number)}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"/>
                        </button>
                        <img src={poke.image} alt={poke.name} className="pokemon-sprite" />
                        <div className="pokemon-name">{poke.name}</div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Squad;