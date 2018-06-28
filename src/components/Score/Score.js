import React from "react";

const Score = (props) => (
    <span className="nav-item float-right" id="score">Score: {props.score} | Top Score: {props.topScore}</span>
);

export default Score;