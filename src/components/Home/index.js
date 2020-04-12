import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { doGet, getIdFromUrl } from '../../helpers/ApiHelper';

const Home = () => {

    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        doGet('/pokemon').then(response => setPokemon(response.results));
    }, []);

    if (!pokemon || !pokemon.length)
        return <h1>Loading...</h1>

    const pokemonList = pokemon.map(p => {
        const id = getIdFromUrl(p.url);

        return (
            <li key={p.url}>
                <Link to={`/detail/${id}`}>{p.name.toUpperCase()}</Link>
            </li>
        )
    });

    return (
        <>
            <h1>Pokémons</h1>
            <ul>{pokemonList}</ul>
        </>
    );
}

export default Home;