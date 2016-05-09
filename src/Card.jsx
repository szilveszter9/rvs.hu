'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { getJSON } from './lib/http.js';

class KeyboardList extends Component {
  render() {
    console.log(this.props.data);
    var keyboards = this.props.data.map(keyboard => {
      return (
        <div key={keyboard.id}>
          <img src={keyboard.imageUrl}/>
        </div>
      );
    });

    return (
      <div className="keyboard--item">
        <h2>Keyboards</h2>
        {keyboards}
      </div>
    );
  }
}

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.getKeyboards();
  }

  getKeyboards() {
    getJSON(
      'data/keyboardList.json',
      (err, data) => {
        if(err) /*if(cnt++ < 5) tryAgain*/;
        else this.setState({ data });
      }
    );
  }

  render() {
    console.log('card render');
    return (
      <div>
        <h1>Card</h1>
        <KeyboardList data={this.state.data}/>
      </div>
    );
  }
}
