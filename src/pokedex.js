import React from "react";
import Pokecard from "./pokecard";
import randomPicks from "./helpers";
import basicPokemon from "./default";
import "./pokedex.css";

import { Container, Row, Col } from 'react-bootstrap'; 

function Pokedex(){
    let randomPokemon = randomPicks(basicPokemon, 8);
    let selectedPokemon = randomPokemon.map(index => basicPokemon[index]);

    const firstHalf = selectedPokemon.slice(0, 4);
    const secondHalf = selectedPokemon.slice(4, 8);

    return (
        <Container className="pokedex">
            <h1 className="title">Pokedex</h1>
            <Row md={4}> 
                {firstHalf.map(pokemon => (
                    <Col key={pokemon.id}>
                        <Pokecard 
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />
                    </Col>
                ))}
            </Row>
            <Row md={4}>
                {secondHalf.map(pokemon => (
                    <Col key={pokemon.id}>
                        <Pokecard 
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Pokedex;

