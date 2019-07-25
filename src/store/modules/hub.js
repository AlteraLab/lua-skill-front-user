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
const GET_HUB_LOGS = 'hub/GET_HUB_LOGS'

/*--------create action--------*/
export const registerHub = createAction(REGISTER_HUB, HubApi.registerHub);
export const scanHub = createAction(SCAN_HUB, HubApi.scanHub);
export const clearScanHub = createAction(CLEAR_SCAN_HUB);
export const clearInput = createAction(CLEAR_INPUT);
export const changeInput = createAction(CHANGE_INPUT);
export const getHubLogs = createAction(GET_HUB_LOGS, HubApi.getHubLogs);

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
        logs: List([])
    })
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
    
    ...pender({
        type: GET_HUB_LOGS,
        onSuccess: (state, action) => {
            return state.set('hubLogList', Map({
                logs: List(action.payload.data.data.logs.map(log=>Map(log)))
            }));
        },
    }),
}, initialState);

/*{
    "msg": "success : Successed to get hub logs",  // String 
    "status": "OK",                                // Httpstatus
    "data": {                                      // Object 
      "logs": [                                    // List 
        {
          "recordedAt": 1559983591000,             // TimeStamp
          "requesterName": "Coco0719",             // String
          "content": "Info -> test",               // String
          "logType": true                          // boolean
        },
        {
        "recordedAt": 1559983590000,
        "requesterName": "Coco0719",
        "content": "Info -> test",
        "logType": true
        }
    ]}
}*/