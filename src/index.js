
import React from "react";
import Pokedex from "./pokedex";
import ReactDOM from 'react-dom';
import "./index.css";

function App(){
    return <Pokedex/>
};

ReactDOM.render(<App/>,
  document.getElementById("root"));