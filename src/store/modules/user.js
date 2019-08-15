//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as UserApi from 'lib/api/user';

/*--------action type--------*/
const GET_USER_INFO = 'user/GET_USER_INFO'; // kakao 로그인
const CHANGE_PAGE = 'user/CHANGE_PAGE';
// const GET_USER_ID = 'user/GET_USER_ID';

/*--------create action--------*/
export const getUserInfo = createAction(GET_USER_INFO, UserApi.getUserInfo);
export const changePage = createAction(CHANGE_PAGE);
// export const getUserId = createAction(GET_USER_ID,UserApi.getUserId);

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
    page: '1',
});

/*--------reducer--------*/
export default handleActions({

    [CHANGE_PAGE]: (state, action) => {
        return state.set('page', action.payload);
    },

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