//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as UserApi from 'lib/api/user';

/*--------action type--------*/
const GET_USER_INFO = 'user/GET_USER_INFO'; // kakao 로그인
const CHANGE_PAGE = 'user/CHANGE_PAGE';
const DELETE_HUB = 'user/DELETE_HUB'; // 허브 삭제
const SET_IS_MODAL_WITH_FALSE = 'user/SET_IS_MODAL_WITH_FALSE';
const SET_IS_REDIRECT_TO_MAIN_WITH_TRUE = 'user/SET_IS_REDIRECT_TO_MAIN_WITH_TRUE';
const SET_IS_REDIRECT_TO_MAIN_WITH_FALSE = 'user/SET_IS_REDIRECT_TO_MAIN_WITH_FALSE';
// const GET_USER_ID = 'user/GET_USER_ID';

/*--------create action--------*/
export const getUserInfo = createAction(GET_USER_INFO, UserApi.getUserInfo);
export const changePage = createAction(CHANGE_PAGE);
export const deleteHub = createAction(DELETE_HUB, UserApi.deleteHub);
export const setIsModalWithFalse = createAction(SET_IS_MODAL_WITH_FALSE);
export const setIsRedirectToMainWithTrue = createAction(SET_IS_REDIRECT_TO_MAIN_WITH_TRUE);
export const setIsRedirectToMainWithFalse = createAction(SET_IS_REDIRECT_TO_MAIN_WITH_FALSE);
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

    isModal: false,

    isLoad: false,

    msg: '',

    isRediectToMain: false,
});

/*--------reducer--------*/
export default handleActions({

    [CHANGE_PAGE]: (state, action) => {
        return state.set('page', action.payload);
    },

    [SET_IS_MODAL_WITH_FALSE]: (state, action) => {
        return state.set('isModal', false)
                    .set('msg', '');
    },

    [SET_IS_REDIRECT_TO_MAIN_WITH_TRUE]: (state, action) => {
        return state.set('isRediectToMain', true);
    },

    [SET_IS_REDIRECT_TO_MAIN_WITH_FALSE]: (state, action) => {
        return state.set('isRediectToMain', false);
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

    ...pender({
        type: DELETE_HUB,
        onSuccess: (state, action) => {
            console.log('DELETE HUB');
            console.log(action.payload);
            if(action.payload.data.data === null || action.payload.data.data === undefined) {
                return state.set('isLoad', false)
                            .set('isModal', true)
                            .set('msg', action.payload.data.msg);
            } 
            else {
                const hubs = state.getIn(['userInfo', 'hubs']).filter(
                    (hub) => hub.hubId !== action.payload.data.data
                );
                return state.set('isLoad', false)
                            .set('isModal', true)
                            .set('msg', action.payload.data.msg)
                            .setIn(['userInfo', 'hubs'], hubs);
            }
        },
        onPending: (state, action) => {
            return state.set('isLoad', true);
        },
        
    }),
}, initialState);