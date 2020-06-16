import React from 'react';

const CharacterSelect = (props) => {

  const characterOptions = props.characters.map((character, name) => {
    return <option value={character.name} key={name}>{character.name}</option>
  })

  function handleChange(event) {
    props.onSelect(event.target.value)
  }

  return(
    <select id="character-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Character...</option>
      {characterOptions}
    </select>
  )
}

export default CharacterSelect;
