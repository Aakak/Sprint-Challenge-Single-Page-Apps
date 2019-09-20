import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <h3>Name: {props.name}</h3>
      <img src={props.image} alt="character" />
      <div className="character-content">
        <h4>Species: {props.species}</h4>
        <h4>Location: {props.location}</h4>
        <h4>Gender: {props.gender}</h4>
        <h4>Status: {props.status}</h4>
      </div>
    </div>
  );
}

export default CharacterCard;
