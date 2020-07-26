
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StartPage from '../Pages/StartPage';
import GamePage from '../Pages/GamePage';
// import EndPage from '../Pages/EndPage';

const Routes = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage}/>
        <Route path='/play' component={GamePage}/>
        {/* <Route path='/gameover' component={EndPage}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;