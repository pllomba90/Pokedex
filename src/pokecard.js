import React from "react";
import Card from 'react-bootstrap/Card';
import "./pokecard.css";


function Pokecard (props){
    return (
        <Card  bg="primary" className="pokecard">
        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="pokemon"/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          <p>Type: {props.type}</p>
          <p>EXP: {props.base_experience}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}


export default Pokecard;

