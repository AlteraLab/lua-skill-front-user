//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as UserApi from 'lib/api/user';

/*--------action type--------*/
const GET_USER_INFO = 'user/GET_USER_INFO'; // kakao 로그인

/*--------create action--------*/
export const getUserInfo = createAction(GET_USER_INFO, UserApi.getUserInfo);

/*--------state definition--------*/
const initialState = Map({
    userInfo: null,
    
});

/*--------reducer--------*/
export default handleActions({

    ...pender({
        type: GET_USER_INFO,
        onSuccess: (state, action) => {
            return state.set('userInfo', Map(
                action.payload.data.data
            ));
        },
    }),

}, initialState);