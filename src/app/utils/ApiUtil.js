import { getJSON } from '../lib/http.js';
import { API, ActionTypes } from '../Constants';
import ServerActionCreators from '../actions/ServerActionCreators';

const ApiUtils = {
  loadKeyboardList () {
    getJSON(`${API}/keyboardList.json`, (err, res) => {
      ServerActionCreators.loadedKeyboardList(res);
    });
  }
};

export default ApiUtils;
