import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import auth from './auth';
import user from './user';
import hub from './hub';

export default combineReducers({
    auth,
    user,
    hub,
    pender: penderReducer, //pender 리듀서 추가
});