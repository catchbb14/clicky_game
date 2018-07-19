import React from "react";
import "./Navbar.css"

const Navbar = props => (
    
    <div className="navbar row">
        <div className = "col-3 brand text-center"><img alt="Red Sox Logo" src="/images/logo.png" /></div>
            <div className = "col-6 text-center message"><h3>{props.message}</h3></div>
            <div className = "col-3 text-center score"><h4>Score: {props.currScore} | Top Score: {props.topScore}</h4></div>

    </div>
);

export default Navbar;
