//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as HubApi from 'lib/api/hub';

/*--------action type--------*/
const REGISTER_HUB = 'hub/REGISTER_HUB'; 

/*--------create action--------*/
export const registerHub = createAction(REGISTER_HUB, HubApi.registerHub);

/*--------state definition--------*/
const initialState = Map({
    hubInfo: List(),
    
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

}, initialState);