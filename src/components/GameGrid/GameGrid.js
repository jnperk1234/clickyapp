import React from "react";
import OnePButton from "../OnePButton";

const GameGrid = (props) => (

<div id="game-grid" className="container justify-content-center">
    {props.pirates.map((pirate) => (
        <OnePButton key={pirate.id} id={pirate.id} clickPirate={props.clickPirate}></OnePButton>
    ))}
</div>
);

export default GameGrid;