import React from "react";

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li class="brand"><a href="/">The Red Sox</a></li>
            <li>{props.message}</li>
            <li>Score: {props.currScore} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Navbar;
