//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List, Record } from 'immutable';
import { pender } from 'redux-pender';
import * as HubApi from 'lib/api/hub';

/*--------action type--------*/
const REGISTER_HUB = 'hub/REGISTER_HUB';
const SCAN_HUB = 'hub/SCAN_HUB';
const CLEAR_SCAN_HUB = 'hub/CLEAR_SCAN_HUB';
const CLEAR_INPUT = 'hub/CLEAR_INPUT';
const CHANGE_INPUT = 'hub/CHANGE_INPUT';

/*--------create action--------*/
export const registerHub = createAction(REGISTER_HUB, HubApi.registerHub);
export const scanHub = createAction(SCAN_HUB, HubApi.scanHub);
export const clearScanHub = createAction(CLEAR_SCAN_HUB);
export const clearInput = createAction(CLEAR_INPUT);
export const changeInput = createAction(CHANGE_INPUT);

/*--------state definition--------*/
const initialState = Map({
    scanHubInfo: Map({
        status: false,
        external_ip: '',
        mac_addr: '',
        external_port: '',
        before_ip:''
    }),
    editHubInfo: Map({
        hub_name:'',
        search_id:'',
        hub_descript:'',
    }),
    registerResult: null
});

/*--------reducer--------*/
export default handleActions({

    [CLEAR_SCAN_HUB]: (state, action) => {
        return state.set('scanHubInfo', Map({
            status: false,
            external_ip: '',
            mac_addr: '',
            external_port: '',
            before_ip:''
        }))
    },

    [CLEAR_INPUT]: (state, action) => {
        const editHubInfo = initialState.get(action.payload);
        return state.set(action.payload, editHubInfo);
    },

    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['editHubInfo', name], value);
    },

    ...pender({
        type: REGISTER_HUB,
        onSuccess: (state, action) => {
            return state.set('registerResult', Map(
                action.payload.data
            ));
        },
    }),

    ...pender({
        type: SCAN_HUB,
        onSuccess: (state, action) => {
            return state.set('scanHubInfo', Map(
                action.payload.data
            ));
        },
        onFailure: (state, action) => {
            return state.set('scanHubInfo',Map({
                status: false,
                external_ip: '',
                mac_addr: '',
                external_port: '',
                before_ip:''
            }));
        }
    }),

}, initialState);