import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import auth from './auth';
import user from './user';

export default combineReducers({
    auth,
    user,
    pender: penderReducer, //pender 리듀서 추가
});