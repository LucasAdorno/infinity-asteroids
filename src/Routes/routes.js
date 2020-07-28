import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StartPage from '../Pages/StartPage';
import InstructionsPage from '../Pages/InstructionsPage';
import GamePage from '../Pages/GamePage';
import EndPage from '../Pages/EndPage';
import Sound from 'react-sound';
import Music from '../assets/music-game.mp3'

const Routes = () => {

  return(
    <>
    <Sound
      url={Music}
      loop={true}
      volume={40}
      autoLoad={true}
      playStatus={Sound.status.PLAYING}
    />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage}/>
        <Route path='/instructions' component={InstructionsPage}/>
        <Route path='/play' component={GamePage}/>
        <Route path='/gameover' component={EndPage}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default Routes;