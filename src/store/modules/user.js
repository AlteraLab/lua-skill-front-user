//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as UserApi from 'lib/api/user';

/*--------action type--------*/
const GET_USER_INFO = 'user/GET_USER_INFO'; // kakao 로그인

/*--------create action--------*/
export const getUserInfo = createAction(GET_USER_INFO, UserApi.getUserInfo);

/*--------state definition--------*/
const initialState = Map({
    userInfo: Map({
        hubs: List(),
        user: Map({
            userId: null,
            providerId: '',
            name: '',
            email: '',
            profileImage:null
        })
    }),
    
});

/*--------reducer--------*/
export default handleActions({

// https://backend-intro.vlpt.us/6/01.html / https://velopert.com/3401
    ...pender({
        type: GET_USER_INFO,
        onSuccess: (state, action) => {
            return state.set('userInfo', Map({
                hubs: List(action.payload.data.data.hubs),
                user: Map(action.payload.data.data.user)
            }));
        },
    }),

}, initialState);