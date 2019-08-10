import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as DevApi from 'lib/api/dev';

/*--------action type--------*/
const SCAN_DEV = 'dev/SCAN_DEV';
const SET_REQUEST_DEV = 'dev/SET_REQUEST_DEV';
const CONNECT_DEV = 'dev/CONNECT_DEV';

/*--------create action--------*/
export const scanDev = createAction(SCAN_DEV, DevApi.scanDev);
export const setRequestDev = createAction(SET_REQUEST_DEV, macAddr => macAddr);
export const connectDev = createAction(CONNECT_DEV, DevApi.connectDev);

/*--------state definition--------*/
const initialState = Map({

	dev: Map({

		scanDevs: List([]),

		requestDev: '',
	
		connectedDevs: List([]),
	}),
})

/*--------reducer--------*/
export default handleActions({

	[SET_REQUEST_DEV]: (state, action) => {
		return state.setIn(['dev', 'requestDev'], action.payload);
	},

	...pender({
		type: SCAN_DEV,
		onSuccess: (state, action) => {
			const devs = action.payload.data.devices;
			return state.setIn(['dev', 'scanDevs'], devs);
		}
	}),

	...pender({
		type: CONNECT_DEV,
		onSuccess: (state, action) => {
			const requestDev = state.getIn(['dev', 'requestDev']);
			const scanDevs = state.getIn(['dev', 'scanDevs']);
			const connectedDevs = state.getIn(['dev', 'connectedDevs']);

			return state.setIn(['dev', 'scanDevs'], scanDevs.filter((item) => item.address !== requestDev))
						.setIn(['dev', 'connectedDevs'], connectedDevs.push(requestDev))
						.setIn(['dev', 'requestDev'], '');
		},
		onFailure: (state, action) => {

		}
	})
}, initialState);