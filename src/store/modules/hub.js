//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import * as HubApi from 'lib/api/hub';

/*--------action type--------*/
const REGISTER_HUB = 'hub/REGISTER_HUB';
const SCAN_HUB = 'hub/SCAN_HUB';
const CLEAR_SCAN_HUB = 'hub/CLEAR_SCAN_HUB';
const CLEAR_INPUT = 'hub/CLEAR_INPUT';
const CHANGE_INPUT = 'hub/CHANGE_INPUT';
const GET_HUB_LOGS = 'hub/GET_HUB_LOGS';
const SET_PRINT_LOG_WITH_ALL_LOG = 'hub/SET_PRINT_LOG_WITH_ALL_LOG';
const SET_PRINT_LOG_WITH_TRUE_LOG = 'hub/SET_PRINT_LOG_WITH_TRUE_LOG';
const SET_PRINT_LOG_WITH_FALSE_LOG = 'hub/SET_PRINT_LOG_WITH_FALSE_LOG';

/*--------create action--------*/
export const registerHub = createAction(REGISTER_HUB, HubApi.registerHub);
export const scanHub = createAction(SCAN_HUB, HubApi.scanHub);
export const clearScanHub = createAction(CLEAR_SCAN_HUB);
export const clearInput = createAction(CLEAR_INPUT);
export const changeInput = createAction(CHANGE_INPUT);
export const getHubLogs = createAction(GET_HUB_LOGS, HubApi.getHubLogs);
export const setPrintLogWithAllLog = createAction(SET_PRINT_LOG_WITH_ALL_LOG);
export const setPrintLogWithTrueLog = createAction(SET_PRINT_LOG_WITH_TRUE_LOG);
export const setPrintLogWithFalseLog = createAction(SET_PRINT_LOG_WITH_FALSE_LOG);

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

    registerResult: null,

    hubLogList : Map({
        logs: List([]),
        failLogs: List([]),
        successLogs: List([]),
        printLogs: List([]),
    }),
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

    [SET_PRINT_LOG_WITH_ALL_LOG]: (state, action) => {
        const allLogs = state.getIn(['hubLogList', 'logs']);
        return state.setIn(['hubLogList', 'printLogs'], allLogs);
    },

    [SET_PRINT_LOG_WITH_TRUE_LOG]: (state, action) => {
        const successLogs = state.getIn(['hubLogList', 'successLogs']);
        return state.setIn(['hubLogList', 'printLogs'], successLogs);
    },

    [SET_PRINT_LOG_WITH_FALSE_LOG]: (state, action) => {
        const failLogs = state.getIn(['hubLogList', 'failLogs']);
        return state.setIn(['hubLogList', 'printLogs'], failLogs);
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
    
    ...pender({
        type: GET_HUB_LOGS,
        onSuccess: (state, action) => {
            const logs = action.payload.data.data.logs;
            const failLogs = logs.filter((log) => log.logType !== false);
            const successLogs = logs.filter((log) => log.logType !== true);
            return state.set('hubLogList', Map({
                logs: List(logs),
                successLogs: List(failLogs),
                failLogs: List(successLogs),
                printLogs: List(logs),
            }));
        },
    }),
}, initialState);

/*
- recordedAt: 1565246191000
- hrdwrId: 1001
- hrdwrName: "testDev2"
- requesterName: "test"
- content: "Test Content"
- logType: false
*/