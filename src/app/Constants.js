var keyMirror = require('keymirror');

module.exports = {
  API: 'http://localhost:8080/data',

  ActionTypes: keyMirror({
    KEYBOARDLIST_LOADED: null,
    LOAD_KEYBOARDLIST: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};

