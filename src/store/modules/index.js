import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import user from './user';
import hub from './hub';
import dev from './dev';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth,
    user,
    hub,
    dev,
    pender: penderReducer, // pender redux 추가, 비동기 리덕스 액션을 관리할 때 필요
});
// pender : https://velopert.com/3401