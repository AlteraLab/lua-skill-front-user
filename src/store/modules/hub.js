//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List, Record } from 'immutable';
import { pender } from 'redux-pender';
import * as HubApi from 'lib/api/hub';

/*--------action type--------*/
const REGISTER_HUB = 'hub/REGISTER_HUB'; 
const SCAN_HUB = 'hub/SCAN_HUB'; 

/*--------create action--------*/
export const registerHub = createAction(REGISTER_HUB, HubApi.registerHub);
export const scanHub = createAction(SCAN_HUB, HubApi.scanHub);

/*--------state definition--------*/
const initialState = Map({
    hubInfo: List(),
    scanHubInfo: Map({
        status: false,
        ipv4:'',
        mac:''
    })
});

/*--------reducer--------*/
export default handleActions({

    ...pender({
        type: REGISTER_HUB,
        onSuccess: (state, action) => {
            return state.set('hubInfo', Map(
                action.payload.data.data
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
            return state.set('scanHubInfo', Map({
                status: false,
                ipv4:'',
                mac:''
            }));
        }
    }),

}, initialState);