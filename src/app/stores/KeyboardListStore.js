import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

const state = {
  keyboardList: [],
  loaded: false
};

const setState = (newState) => {
  Object.assign(state, newState);
  events.emit(CHANGE_EVENT);
};

const KeyboardListStore = {
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
  let { action } = payload;
  if (action.type === ActionTypes.KEYBOARDLIST_LOADED) {
    setState({
      loaded: true,
      keyboardList: action.keyboardList
    });
  }
});

export default KeyboardListStore;
