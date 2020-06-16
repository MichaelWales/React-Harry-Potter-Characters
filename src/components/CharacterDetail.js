import React from 'react';

const CharacterDetail = (props) => {
  return(
    <div>
      <img src={props.character.image}/>
      <h3>{props.character.name}</h3>
      <br/>
      {if (props.character.house) {
        <p>{props.character.house}</p>
      }}

    </div>
  )
}
