import React, {Component} from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetail from '../components/CharacterDetail';

class CharacterWindow extends Component {
  render(){
    return(
      <div>
        <h2>Harry Potter Characters!</h2>
        <CharacterSelect/>
        <CharacterDetail/>
      </div>
    )
  }
}

export default CharacterWindow;
