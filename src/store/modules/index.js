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
    pender: penderReducer,
});
