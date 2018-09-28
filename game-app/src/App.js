import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';

library.add(faStroopwafel) 

class App extends Component {
  render() {
    return (
      <div>
        <GameContainer />
      </div>
    );
  }
}

export default App;
