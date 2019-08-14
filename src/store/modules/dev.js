import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as DevApi from 'lib/api/dev';

/*--------action type--------*/
const SCAN_DEV = 'dev/SCAN_DEV';
const SET_REQUEST_DEV = 'dev/SET_REQUEST_DEV';
const CONNECT_DEV = 'dev/CONNECT_DEV';
const SET_IS_MODAL_WITH_FALSE = 'dev/SET_IS_MODAL_WITH_FALSE';
<<<<<<< HEAD
const REQUEST_CONNECTED_DEVS = 'dev/REQUEST_CONNECTED_DEVS';
const GET_DEV_DETAIL = 'dev/GET_DEV_DETAIL';

/*--------create action--------*/
export const scanDev = createAction(SCAN_DEV, DevApi.scanDev);
export const setRequestDev = createAction(SET_REQUEST_DEV, dev => dev);
export const connectDev = createAction(CONNECT_DEV, DevApi.connectDev);
export const setIsModalWithFalse = createAction(SET_IS_MODAL_WITH_FALSE);
export const requestConnectedDevs = createAction(REQUEST_CONNECTED_DEVS, DevApi.requestConnectedDevs);
export const getDevDetail = createAction(GET_DEV_DETAIL, DevApi.getDevDetail); 
=======

/*--------create action--------*/
export const scanDev = createAction(SCAN_DEV, DevApi.scanDev);
export const setRequestDev = createAction(SET_REQUEST_DEV, macAddr => macAddr);
export const connectDev = createAction(CONNECT_DEV, DevApi.connectDev);
export const setIsModalWithFalse = createAction(SET_IS_MODAL_WITH_FALSE);
>>>>>>> upstream/feature

/*--------state definition--------*/
const initialState = Map({

	dev: Map({

		scanDevs: List([]),
<<<<<<< HEAD
	
		connectedDevs: List([]),

		requestDev: '',

		devDetail: '',
=======

		requestDev: '',
	
		connectedDevs: List([]),
>>>>>>> upstream/feature
	}),

	isModal: false,

	isResult: null,
<<<<<<< HEAD

	isLoading: false,
=======
>>>>>>> upstream/feature
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
<<<<<<< HEAD
			return state.setIn(['dev', 'scanDevs'], devs)
						.set('isLoading', false);
		},
		onFailure: (state, action) => {
			return state.set('isLoading', false);
		},
		onPending: (state, action) => {
			return state.set('isLoading', true);
=======
			return state.setIn(['dev', 'scanDevs'], devs);
>>>>>>> upstream/feature
		}
	}),

	...pender({
		type: CONNECT_DEV,
		onSuccess: (state, action) => {
			const requestDev = state.getIn(['dev', 'requestDev']);
			const scanDevs = state.getIn(['dev', 'scanDevs']);
			const connectedDevs = state.getIn(['dev', 'connectedDevs']);
<<<<<<< HEAD
			return state.setIn(['dev', 'scanDevs'], scanDevs.filter((item) => item !== requestDev))
						//.setIn(['dev', 'connectedDevs'], connectedDevs => connectedDevs.push(requestDev))
						.setIn(['dev', 'connectedDevs'], [ ...connectedDevs, requestDev ])
						.setIn(['dev', 'requestDev'], '')
						.set('isModal', true)
						.set('isResult', true)
						.set('isLoading', false);
=======

			return state.setIn(['dev', 'scanDevs'], scanDevs.filter((item) => item.address !== requestDev))
						.setIn(['dev', 'connectedDevs'], connectedDevs.push(requestDev))
						.setIn(['dev', 'requestDev'], '')
						.set('isModal', true)
						.set('isResult', true);
>>>>>>> upstream/feature
		},
		onFailure: (state, action) => {
			return state.setIn(['dev', 'requestDev'], '')
						.set('isModal', true)
<<<<<<< HEAD
						.set('isResult', false)
						.set('isLoading', false);
		},
		onPending: (state, action) => {
			return state.set('isLoading', true)
		}
	}),

	...pender({
		type: REQUEST_CONNECTED_DEVS,
		onSuccess: (state, action) => {
			const connectedDevs = action.payload.data.devices;
			return state.setIn(['dev', 'connectedDevs'], connectedDevs);
		}
	}),

	...pender({
		type: GET_DEV_DETAIL,
		onSuccess: (state, action) => {
			const devDetail = action.payload.data.devDetail;
			return state.setIn(['dev', 'devDetail'], devDetail);
=======
						.set('isResult', false);
>>>>>>> upstream/feature
		}
	})
}, initialState);