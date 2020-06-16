import React from 'react';

const CharacterSelect = (props) => {
  return(
    <select id="character-selector" defaultValue="default">
      <option disabled value="default">Choose a Character...</option>
    </select>
  )
}

export default CharacterSelect;
