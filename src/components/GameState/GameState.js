import React from 'react';
import {Link} from 'react-router-dom';

function GameState(){
  return(
    <div className="bubble3">
      <Link className="linkStyle" to="/">PLEASE RESTART GAME</Link>
    </div>
  )
}

export default GameState;
