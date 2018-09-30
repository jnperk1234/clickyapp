import React from "react";
import Score from "../Score";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <span className="navbar-brand" id="title">One Piece Clicker</span>
        {/* Re-enable for mobile responsiveness */}
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="align-center">
            {props.gameActive ? <span className="navbar-item align-center">{props.result}</span> : <span className="navbar-item align-center">Click Any Pirate To Begin!</span>}
        </div>
        <div className="navbar-item float-right">
            <Score score={props.score} topScore={props.topScore}></Score>
        </div>
    </nav>
);

export default Navbar;