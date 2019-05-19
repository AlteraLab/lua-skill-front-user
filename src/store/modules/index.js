import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import user from './user';
import hub from './hub';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth,
    user,
    hub,
    pender: penderReducer, //pender 리듀서 추가
});