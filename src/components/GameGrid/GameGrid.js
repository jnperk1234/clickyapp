import React from "react";
import OnePButton from "../OnePButton";

const GameGrid = (props) => (
    <div id="game-grid" className="container justify-content-center">
        {props.op.map((op) => (
            <OnePButton key={op.id} id={op.id} clickOP={props.clickOP}></OnePButton>
        ))}
    </div>
);

export default GameGrid