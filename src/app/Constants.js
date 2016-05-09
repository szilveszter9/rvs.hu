import keyMirror from 'keymirror';

export const API = 'http://localhost:8080/data';

export const ActionTypes = keyMirror({
  KEYBOARDLIST_LOADED: null,
  LOAD_KEYBOARDLIST: null
});

export const PayloadSources = keyMirror({
  SERVER_ACTION: null,
  VIEW_ACTION: null
});
