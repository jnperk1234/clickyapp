import React from "react";
import CatButton from "../OnePButton";

const GameGrid = (props) => (

<div id="game-grid" className="container justify-content-center">
    {props.onep.map((op) => (
        <OnePButton key={op.id} id={op.id} clickOp={props.clickOp}></OnePButton>
    ))}
</div>
);

export default GameGrid;