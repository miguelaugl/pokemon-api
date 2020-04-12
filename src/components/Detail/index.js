import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { doGet } from '../../helpers/ApiHelper';

const Detail = () => {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        doGet(`/pokemon/${id}`).then(setPokemon);
    }, [id]);

    if (!pokemon) return <h1>Loading...</h1>

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokémon"/>
            <img src={pokemon.sprites.back_default} alt="Imagem do Pokémon"/>
        </>
    );
}

export default Detail;