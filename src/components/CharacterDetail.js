import React from 'react';

const CharacterDetail = (props) => {

  if (!props.character) return null;

  return(
    <div>
      <br/>
      <img src={props.character.image}/>
      <h3>{props.character.name}</h3>
      <p>Species: {props.character.species}</p>
      <p>House: {props.character.house}</p>
      <h3>Wand Details</h3>
      <p>Wood: {props.character.wand.wood}</p>
      <p>Core: {props.character.wand.core}</p>
      <p>Length: {props.character.wand.length}"</p>
    </div>
  )
}

export default CharacterDetail;
