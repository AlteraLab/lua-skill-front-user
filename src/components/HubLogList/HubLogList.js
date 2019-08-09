import React ,{Component} from 'react';
import './HubLogList.css';
import Moment from 'react-moment';

const HubLog = ( { recordedAt, hrdwrName, requsterName, content, logType } ) => {
	return (
		<div>
            <Moment format="YYYY-MM-DD HH:mm (UTCZ)">
                {recordedAt}
            </Moment>
		</div>
	);
};

class HubLogList extends Component {
/* 
- recordedAt: 1565246191000
- hrdwrId: 1001
- hrdwrName: "testDev2"
- requesterName: "test"
- content: "Test Content"
- logType: false 
*/
    _setPrintLogWithAllLog = () => {
        const { HubActions} = this.props;
        HubActions.setPrintLogWithAllLog();
    }

    _setPrintLogWithTrueLog = () => {
        const { HubActions } = this.props;
        HubActions.setPrintLogWithTrueLog();
    }

    _setPrintLogWithFalseLog = () => {
        const { HubActions } = this.props;
        HubActions.setPrintLogWithFalseLog();
    }

    _renderLog = () => {
        const { printLogs } = this.props;

        return printLogs.map(
            log => {
                return <HubLog
                            key={log.recordedAt}
                            recordedAt={log.recordedAt}
                            hrdwrName={log.hrdwrName}
                            requsterName={log.requsterName}
                            content={log.content}
                            logType={log.logType}
                        />
            }
        )
    }

    render() {

		return (
            <div className="main">
                <div className="tab">
                    <input 
                        id="tab1" 
                        type="radio" 
                        name="tabs" 
                        value='tab1'
                        onClick={this._setPrintLogWithAllLog} 
                    /> 
                    <label for="tab1">전체</label>

                    <input 
                        id="tab2" 
                        type="radio" 
                        name="tabs" 
                        value='tab2' 
                        onClick={this._setPrintLogWithTrueLog}
                    />
                    <label for="tab2">성공</label>

                    <input 
                        id="tab3" 
                        type="radio" 
                        name="tabs"  
                        value='tab3' 
                        onClick={this._setPrintLogWithFalseLog}
                    />
                    <label for="tab3">실패</label>
                </div>
                <div>
                    {this._renderLog()}
                </div>                

            </div>
		)
	}
}

export default HubLogList;
