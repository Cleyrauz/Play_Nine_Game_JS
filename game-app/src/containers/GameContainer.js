import React, { Component } from 'react';
import Stars from '../components/Stars';
import Button from '../components/Button';
import Answer from '../components/Answer';
import Numbers from '../components/Numbers';

class GameContainer extends Component {
  render()
 {
   return (
     <div className="container">
       <h3>Play Nine</h3>
       <hr />
       <div className="row">
       <Stars />
       <Button />
       <Answer />
     </div>
     <br />
      <Numbers />
     </div>
   );
 };
};

export default GameContainer;
