import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';
import ApiUtil from '../utils/ApiUtil.js';

const ViewActionCreators = {
  loadKeyboardList () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_KEYBOARDLIST
    });
    ApiUtil.loadKeyboardList();
  }
};

export default ViewActionCreators;
