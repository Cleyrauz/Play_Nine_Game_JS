import React, { Component } from 'react';
import Stars from '../components/Stars';
import Button from '../components/Button';
import Answer from '../components/Answer';

class GameContainer extends Component {
  render()
 {
   return (
     <div>
       <h3>Play Nine</h3>
       <Stars />
       <Button />
       <Answer />
     </div>
   );
 };
};

export default GameContainer;
