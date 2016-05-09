import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  keyboardList: [],
  loaded: false
};

var setState = (newState) => {
  Object.assign(state, newState);
  events.emit(CHANGE_EVENT);
};

var KeyboardListStore = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

KeyboardListStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;
  if (action.type === ActionTypes.KEYBOARDLIST_LOADED) {
    setState({
      loaded: true,
      keyboardList: action.keyboardList
    });
  }
});

export default KeyboardListStore;
