import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import PokemonCard from '../components/PokemonCard';

test('renders PokemonCard component', () => {
    const mockAddToSquad = jest.fn();
    const mockRemoveFromSquad = jest.fn();
    const pokemon = {
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass', 'poison'],
        type: 'grass',
        number: 1,
    };

    render(
        <PokemonCard
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            type={pokemon.type}
            number={pokemon.number}
            addToSquad={mockAddToSquad}
            removeFromSquad={mockRemoveFromSquad}
            inSquad={false}
        />
    );

    expect(screen.getByText('Bulbasaur #1')).toBeInTheDocument();
    expect(screen.getByText('Type: grass, poison')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add to Squad/i })).toBeInTheDocument();
});

test('calls addToSquad when button is clicked', () => {
    const mockAddToSquad = jest.fn();
    const mockRemoveFromSquad = jest.fn();
    const pokemon = {
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass', 'poison'],
        type: 'grass',
        number: 1,
    };

    render(
        <PokemonCard
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            type={pokemon.type}
            number={pokemon.number}
            addToSquad={mockAddToSquad}
            removeFromSquad={mockRemoveFromSquad}
            inSquad={false}
        />
    );

    fireEvent.click(screen.getByRole('button', { name: /Add to Squad/i }));
    expect(mockAddToSquad).toHaveBeenCalledWith(pokemon);
});