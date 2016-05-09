'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import IndexPage from './IndexPage.jsx';
import Card from './Card.jsx';
import Email from './Email.jsx';
import ImagePuzzle from './ImagePuzzle.jsx';
import ImageShuffle from './ImageShuffle.jsx';
import Typewriter from './Typewriter.jsx';
import WordGame from './WordGame.jsx';

export class App extends Component {
  render() {
    return (
      <div id="main">
        <ul>
          <li className="menu--item menu--item-Home"><Link to="/">Home</Link></li>
          <li className="menu--item menu--item-Card"><Link to="card">Card</Link></li>
          <li className="menu--item menu--item-Email"><Link to="email">Email</Link></li>
          <li className="menu--item menu--item-Typewriter"><Link to="typewriter">Typewriter</Link></li>
          <li className="menu--item menu--item-WordGame"><Link to="wordgame">WordGame</Link></li>
          <li className="menu--item menu--item-ImagePuzzle"><Link to="imagepuzzle">ImagePuzzle</Link></li>
          <li className="menu--item menu--item-ImageShuffle"><Link to="imageshuffle">ImageShuffle</Link></li>
        </ul>

        <ReactCSSTransitionGroup
          component="div"
          id="page"
          transitionName="switchTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export function startApp() {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage}/>
        <Route path="card" component={Card} />
        <Route path="email" component={Email} />
        <Route path="typewriter" component={Typewriter} />
        <Route path="wordgame" component={WordGame} />
        <Route path="imagepuzzle" component={ImagePuzzle} />
        <Route path="imageshuffle" component={ImageShuffle} />
      </Route>
    </Router>
  ), document.getElementById('app'));
}
