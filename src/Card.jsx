'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Card extends Component {
  render() {
    console.log('card render');
    return (
      <div>
        <h1>Card</h1>
      </div>
    );
  }
}
