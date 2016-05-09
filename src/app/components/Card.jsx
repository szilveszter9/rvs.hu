'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { getJSON } from '../lib/http.js';
import KeyboardListStore from '../stores/KeyboardListStore.js';
import ViewActionCreators from '../actions/ViewActionCreators.js';

class KeyboardList extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    //KeyboardListStore.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    //this.getKeyboards();
    KeyboardListStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadKeyboardList();
  }

  componentWillUnmount () {
    KeyboardListStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange () {
    this.setState(KeyboardListStore.getState());
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    var keyboards = this.state.keyboardList.map(keyboard => {
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
  render() {
    return (
      <div>
        <h1>Card</h1>
        <KeyboardList/>
      </div>
    );
  }
}
