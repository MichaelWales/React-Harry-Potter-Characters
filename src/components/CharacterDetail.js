import React from 'react';

const CharacterDetail = (props) => {

  if (!props.character) return null;

  return(
    <div>
      <img src={props.character.image}/>
      <h3>{props.character.name}</h3>
      <br/>
      <p>{props.character.house}</p>

    </div>
  )
}

export default CharacterDetail;
