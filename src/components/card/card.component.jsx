import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="fighters"
      src={`https://robohash.org/${props.fighter.id}?set=set2&size=180x180`}
    />
    <h2>{props.fighter.name}</h2>
    <p> {props.fighter.email} </p>
  </div>
);
