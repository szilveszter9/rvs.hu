import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';

const ServerActionCreators = {
  loadedKeyboardList (keyboardList) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.KEYBOARDLIST_LOADED,
      keyboardList: keyboardList
    });
  }
};

export default ServerActionCreators;
