import React from "react";
import "./PlayerCard.css"

const PlayerCard = props => (
    <div className = "card" onClick = {() => props.handleClick(props.id)}>
        <img className = "card-img-top" src = {props.image} alt = {props.name}/>
        <div className = "card-body">
            <h5 className = "card-title">{props.name}</h5>
            <h6 className = "card-title">Number: {props.number}</h6>
            <h6 className = "card-text">Position: {props.position}</h6>
        </div>
    </div>
);

export default PlayerCard;