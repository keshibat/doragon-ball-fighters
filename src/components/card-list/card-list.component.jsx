import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.fighters.map(fighter => (
        <Card key={fighter.id} fighter={fighter} />
      ))}
    </div>
  );
};
