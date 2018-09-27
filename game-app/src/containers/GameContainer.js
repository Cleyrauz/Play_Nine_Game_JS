import React, { Component } from 'react';
import Stars from '../components/Stars';

class GameContainer extends Component {
  render()
 {
   return (
     <div>
       <h3>Play Nine</h3>
       <Stars />
     </div>
   );
 };
};

export default GameContainer;
