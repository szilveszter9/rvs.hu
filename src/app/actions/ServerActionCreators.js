import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';

var ServerActionCreators = {
  loadedKeyboardList (keyboardList) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.KEYBOARDLIST_LOADED,
      keyboardList: keyboardList
    });
  }
};

export default ServerActionCreators;
