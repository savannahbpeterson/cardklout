import React from 'react'
import './Card.css'


const Card = (props) => {
    return(
        <div className="Card">
            <div className="cardInfo">
                <p className="id">ID {props.id}</p>
                <p>Player Name {props.name}</p>
                <p>Sport {props.sport}</p>
                <p>Year {props.year}</p>
                <p>Team {props.team}</p>
                <p>Manufacture {props.manufacture}</p>
                <p>Brand {props.brand}</p>
                <p>Condition {props.condition}</p>
            </div>
        </div>
    )
}

export default Card;