import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as hubActions from '../store/modules/hub';
import {
    BasicNav,
    BasicBoard,
    BasicFooter,
    HubLogList
} from '../components';

class HubLogPage extends Component {
    
    componentDidMount() {
        const { HubActions, location } = this.props; 
        HubActions.getHubLogs(location.state.hubMac);
    }

    render() {
        const { 
            user,
            printLogs,
            successLogs,
            failLogs,
            logs,
            HubActions,
        } = this.props;
        
        console.log('printLogs -> ');
        console.log(printLogs);

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard
                    title="허브 로그"
                >
                    <HubLogList 
                        printLogs={printLogs}
                        successLogs={successLogs}
                        failLogs={failLogs}
                        logs={logs}
                        HubActions={HubActions}
                    />
                </BasicBoard>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            user: {
                userId: state.user.getIn(['userInfo', 'user', 'userId']),
                name: state.user.getIn(['userInfo', 'user', 'name']),
                profileImage: state.user.getIn(['userInfo', 'user', 'profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs']),
            printLogs: state.hub.getIn(['hubLogList', 'printLogs']),
            failLogs: state.hub.getIn(['hubLogList', 'failLogs']),
            successLogs: state.hub.getIn(['hubLogList', 'successLogs']),
            logs: state.hub.getIn(['hubLogList', 'logs']),
        }),
        dispatch => ({
            HubActions : bindActionCreators(hubActions, dispatch)
        })
    )(HubLogPage)
);