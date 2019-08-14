import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as DevApi from 'lib/api/dev';

/*--------action type--------*/
const SCAN_DEV = 'dev/SCAN_DEV';
const SET_REQUEST_DEV = 'dev/SET_REQUEST_DEV';
const CONNECT_DEV = 'dev/CONNECT_DEV';
const SET_IS_MODAL_WITH_FALSE = 'dev/SET_IS_MODAL_WITH_FALSE';

/*--------create action--------*/
export const scanDev = createAction(SCAN_DEV, DevApi.scanDev);
export const setRequestDev = createAction(SET_REQUEST_DEV, macAddr => macAddr);
export const connectDev = createAction(CONNECT_DEV, DevApi.connectDev);
export const setIsModalWithFalse = createAction(SET_IS_MODAL_WITH_FALSE);

/*--------state definition--------*/
const initialState = Map({

	dev: Map({

		scanDevs: List([]),

		requestDev: '',
	
		connectedDevs: List([]),
	}),

	isModal: false,

	isResult: null,
})

/*--------reducer--------*/
export default handleActions({

	[SET_REQUEST_DEV]: (state, action) => {
		return state.setIn(['dev', 'requestDev'], action.payload);
	},

	[SET_IS_MODAL_WITH_FALSE]: (state, action) => {
		return state.set('isModal', false)
					.set('isResult', null);
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
						.setIn(['dev', 'requestDev'], '')
						.set('isModal', true)
						.set('isResult', true);
		},
		onFailure: (state, action) => {
			return state.setIn(['dev', 'requestDev'], '')
						.set('isModal', true)
						.set('isResult', false);
		}
	})
}, initialState);