import React, {Component} from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetail from '../components/CharacterDetail';

class CharacterWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters'
    fetch(url)
      .then(response => response.json())
      .then(characters => this.setState({characters: characters}))
      .catch(err => console.error);
  }

  handleChange(character) {
    this.setState({selectedCharacterName: character})
  }

  render(){

    const selectedCharacter = this.state.characters.find(character => {
      return character.name === this.state.selectedCharacterName
    })

    return(
      <div>
        <h2>Harry Potter Characters!</h2>
        <CharacterSelect characters={this.state.characters} onSelect={this.handleChange}/>
        <CharacterDetail character={selectedCharacter}/>
      </div>
    )
  }
}

export default CharacterWindow;
