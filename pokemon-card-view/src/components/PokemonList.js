import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonList = ({ searchQuery }) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            const detailedPokemon = await Promise.all(
                data.results.map(async (poke, index) => {
                    const pokeDetails = await fetch(poke.url);
                    const pokeDetailsData = await pokeDetails.json();
                    return {
                        name: pokeDetailsData.name.charAt(0).toUpperCase() + pokeDetailsData.name.slice(1),
                        number: index + 1,
                        image: pokeDetailsData.sprites.front_shiny,
                        types: pokeDetailsData.types.map(typeInfo => typeInfo.type.name)
                    };
                })
            );
            setPokemon(detailedPokemon);
        };

        fetchPokemon();
    }, []);
    const filteredPokemon = pokemon.filter(poke => {
        const query1 = searchQuery.toString();
        const query = query1.toLowerCase();
        return (
            poke.name.toLowerCase().includes(query) ||
            poke.number.toString().includes(query) ||
            poke.types.some(type => type.toLowerCase().includes(query))
        );
    });
    return (
        <div className="container mt-4">
            <div className="row">
                {filteredPokemon.map((poke, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <PokemonCard name={poke.name} image={poke.image} types={poke.types} type={poke.types[0]} number={poke.number} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;